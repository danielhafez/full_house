import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";

export default function BusinessProfile() {
  return (
    <>
      <Card style={{ margin: "10%" }} boxShadow={3}>
        <CardContent>
          <img
            src={logo}
            alt="company_logo"
            style={{ width: "190px", height: "150px", marginBottom: "-20px" }}
          />
          <h1>Ichilov Hospital</h1>

          <Typography>Maximum Capacity: 35 people</Typography>
        </CardContent>
      </Card>
      <Card style={{ margin: "10%" }}>
        <CardContent>
          <h2>Business Information:</h2>
          <a>Website: https://www.tasmc.org.il/sites/en/Pages/default.aspx</a>
          <Typography>Phone Number: 59-246-8079</Typography>
          <Typography>
            Business Information: "at turpis donec posuere metus vitae ipsum
            aliquam non mauris morbi non"
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
