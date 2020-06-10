import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "../css/BusinessProfile.css";
import { useParams } from "react-router-dom";
import { searchCompany } from "../lib/api";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import clsx from "clsx";

const BusinessProfile = () => {
  let { id } = useParams();
  const [company, setCompany] = React.useState({});

  React.useEffect(() => {
    searchCompany("company_id", id).then((response) => {
      setCompany(response.data);
    });
  }, [company]);

  return (
    <div className="background">
      <Container maxWidth="sm" style={{ marginTop: "40px" }}>
        <Card className="card_styling">
          <CardContent>
            <img
              src={company.logo}
              alt="company_logo"
              style={{ width: "150px", height: "120px", marginBottom: "-20px" }}
            />
            <h1>{company.company_name}</h1>

            <Typography>
              Maximum Capacity Allowed: {company.maximum_capacity}
            </Typography>
          </CardContent>
        </Card>

        <Card className="card_styling">
          <CardContent>
            <Deposits occupancy={80} />
          </CardContent>
        </Card>
        <Card>
          <Paper className="fixed-height">
            <Chart />
          </Paper>
        </Card>
        <Card className="business_information card_styling">
          <CardContent>
            <h2>Business Information:</h2>
            <div className="business_content">
              <b style={{ marginRight: "10px" }}>Business Address: </b>
              {company.address}
            </div>
            <div className="business_content">
              <b style={{ marginRight: "10px" }}>Phone Number: </b>
              {company.phone}
            </div>
            <div className="business_content">
              <b>Business Information:</b>
            </div>
            <div>{company.description}</div>
          </CardContent>
        </Card>
      </Container>
      {/* Chart */}
      {/* % occupancy */}
    </div>
  );
};

export default BusinessProfile;
