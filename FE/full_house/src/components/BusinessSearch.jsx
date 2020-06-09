import React, { Component } from "react";
import axios, * as others from "axios";

class BusinessSearch extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount = () => {
    this.getCompanies();
  };

  getCompanies = () => {
    axios({
      method: "get",
      url: "http://127.0.0.1:5000/companies",
    })
      .then((response) => {
        console.log(response);
        const companiesdata = response.data;
        this.setState({ posts: companiesdata.data });
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
            <h1 className="text-center" style={{ color: "white" }}>
              Companies
            </h1>
            <table
              className="table col-md-6 mx-auto"
              style={{ color: "white" }}
            >
              {this.state.posts.map((post) => {
                return (
                  <tbody>
                    <tr>
                      <td>First Name:</td>
                      <td>{post.company_name}</td>
                    </tr>
                    <tr>
                      <td>Last Name:</td>
                      <td>{post.address}</td>
                    </tr>
                    <tr>
                      <td>Student ID:</td>
                      <td>{post._id}</td>
                    </tr>

                    <tr></tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessSearch;
