import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { searchCompany } from "../lib/api";

const BusinessProfile = () => {
  let { id } = useParams();
  const [company, setCompany] = React.useState({});

  searchCompany("company_id", id).then((response) => {
    setCompany(response.data);
    console.log(company);
  });

  return (
    <div>
      <Card style={{ margin: "10%" }} boxShadow={3}>
        <CardContent>
          <img
            src={company.logo}
            alt="company_logo"
            style={{ width: "190px", height: "150px", marginBottom: "-20px" }}
          />
          <h1>{company.company_name}</h1>

          <Typography>Maximum Capacity: {company.maximum_capacity}</Typography>
        </CardContent>
      </Card>
      <Card style={{ margin: "10%" }}>
        <CardContent>
          <h2>Business Information:</h2>
          <div>Business Address: {company.address}</div>
          <Typography>Phone Number: {company.phone}</Typography>
          <Typography>Business Information: {company.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessProfile;

// export default function BusinessProfile() {
//   return (
//     <>

//     </>
//   );
// }
