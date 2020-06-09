import React, { Component } from "react";
import { getAllCompanies } from "../lib/api";

class BusinessSearch extends Component {
  constructor() {
    super();
    this.state = {
      company: [],
    };
  }

  componentDidMount = () => {
    this.getCompanies();
  };

  getCompanies = () => {
    getAllCompanies()
      .then((response) => {
        const companiesdata = response.data;
        this.setState({ company: companiesdata });
        return response.json;
      })
      .catch(() => {
        alert("Retriving data");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron1 mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Companies</h1>

            {this.state.company.map((post) => {
              console.log(JSON.parse(post));

              return <div>{JSON.parse(post).company_name}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessSearch;
