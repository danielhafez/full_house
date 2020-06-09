import React, { Component } from "react";
import { getAllCompanies } from "../lib/api";
import MaterialTable from "material-table";
import "../css/BusinessSearch.css";

class BusinessSearch extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        { title: "Logo", field: "logo" },
        { title: "Company Name", field: "company_name" },
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
      <MaterialTable
        title="Find your House"
        columns={this.state.columns}
        data={this.state.data}
      />
    );
  }
}

export default BusinessSearch;
