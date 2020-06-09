import React, { Component } from "react";
import { getAllCompanies } from "../lib/api";
import MaterialTable, { MTableToolbar } from "material-table";
import Card from "@material-ui/core/Card";
import "../css/BusinessSearch.css";

class BusinessSearch extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          field: "url",
          title: "logo",
          render: (rowData) => (
            <img
              src={rowData.logo}
              style={{ width: 50, height: 40, borderRadius: "50%" }}
            />
          ),
        },
        { title: "Company Name", field: "company_name" },
        { title: "Maximum Capacity", field: "maximum_capacity", type: "url" },
        {
          field: "url",
          title: "More Information",
          render: (rowData) => (
            <a href={"companyprofile/" + rowData.company_id}>
              Get more information
            </a>
          ),
        },
      ],
      data: [],
    };
  }

  componentDidMount = () => {
    this.getCompanies();
  };

  getCompanies = () => {
    getAllCompanies()
      .then((response) => {
        const companiesdata = response.data;
        const storage = [];
        for (let i = 0; i < companiesdata.length; i++) {
          storage.push(JSON.parse(companiesdata[i]));
        }
        this.setState({ data: storage });
        return response.json;
      })
      .catch(() => {
        alert("Retriving data");
      });
  };

  render() {
    return (
      <Card variant="outlined">
        <MaterialTable
          title="Where do you want to go?"
          columns={this.state.columns}
          data={this.state.data}
        />
      </Card>
    );
  }
}

export default BusinessSearch;
