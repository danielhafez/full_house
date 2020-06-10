import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "../css/BusinessProfile.css";
import { useParams } from "react-router-dom";
import { searchCompany } from "../lib/api";
import Deposits from "./Deposits";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faFacebookMessenger,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const BusinessProfile = () => {
  let { id } = useParams();
  const [company, setCompany] = React.useState({});
  const [percentage_styling, setPercentage_styling] = React.useState();
  const [percentage, setPercentage] = React.useState();

  React.useEffect(() => {
    searchCompany("company_id", id).then((response) => {
      setCompany(response.data);
    });
  }, []);

  React.useEffect(() => {
    let p = Math.ceil(
      (company.current_occupancy / company.maximum_capacity) * 100
    );
    setPercentage(p);
  }, [company]);

  React.useEffect(() => {
    if (percentage >= 70) {
      setPercentage_styling("red");
    } else if (percentage >= 51) {
      setPercentage_styling("yellow");
    } else if (percentage <= 50) {
      setPercentage_styling("green");
    }
  }, [percentage]);

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
            <div className={`percentage_styling-${percentage_styling}`}>
              <Deposits occupancy={percentage} />
            </div>
          </CardContent>
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
        <div className="display-social-media">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="social-media facebook"
          />
          <FontAwesomeIcon
            icon={faPinterest}
            size="2x"
            className="social-media pinterest"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="social-media twitter"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="social-media instagram"
          />
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            size="2x"
            className="social-media messenger"
          />
        </div>
        <Link className="display-goBack" to={"/all_companies"}>
          Go Back to See other Companies
        </Link>
      </Container>
    </div>
  );
};

export default BusinessProfile;
