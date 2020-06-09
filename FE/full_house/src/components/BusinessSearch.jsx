import React, { Component } from "react";
import { getAllCompanies } from "../lib/api";
import "../css/BusinessSearch.css";
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

              return (
                <div>
                  <img
                    src={JSON.parse(post).logo}
                    alt="company_logo"
                    className="company_logo"
                  />
                  <h2 className="company_title">
                    {JSON.parse(post).company_name}
                  </h2>
                  <hr/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessSearch;
