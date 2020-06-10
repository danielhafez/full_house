import React, { Component } from "react";
import { getAllCompanies } from "../lib/api";
import MaterialTable from "material-table";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

import "../css/BusinessSearch.css";

class BusinessSearch extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          field: "url",
          title: "Logo",
          render: (rowData) => (
            <img
              src={rowData.logo}
              style={{ width: 50, height: 40, borderRadius: "50%" }}
            />
          ),
        },
        { title: "Company Name", field: "company_name" },
        {
          title: "Current occupancy",
          field: "maximum_capacity current_occupancy",
          type: "url",
          render: (rowData) => (
            <div>
              {Math.ceil(
                (rowData.current_occupancy / rowData.maximum_capacity) * 100
              )}
              %
            </div>
          ),
        },
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
    getAllCompanies().then((response) => {
      const companiesdata = response.data;
      const storage = [];
      for (let i = 0; i < companiesdata.length; i++) {
        storage.push(JSON.parse(companiesdata[i]));
      }
      this.setState({ data: storage });
      return response.json;
    });
  };

  render() {
    return (
      <Container maxWidth="sm" style={{ marginTop: "40px" }}>
        <Card variant="outlined">
          <MaterialTable
            title="SEARCH FOR A BUSINESS NEAR YOU"
            columns={this.state.columns}
            data={this.state.data}
          />
        </Card>
      </Container>
    );
  }
}

export default BusinessSearch;
