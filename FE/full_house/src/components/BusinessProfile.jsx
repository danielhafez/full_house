import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "../css/BusinessProfile.css";
import { useParams } from "react-router-dom";
import { searchCompany } from "../lib/api";

const BusinessProfile = () => {
  let { id } = useParams();
  const [company, setCompany] = React.useState({});

  React.useEffect(() => {
    searchCompany("company_id", id).then((response) => {
      setCompany(response.data);
    });
  }, [company]);

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Card style={{ margin: "10%" }} boxShadow={3}>
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
      <Card className="business_information">
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
  );
};

export default BusinessProfile;

// export default function BusinessProfile() {
//   return (
//     <>

//     </>
//   );
// }
