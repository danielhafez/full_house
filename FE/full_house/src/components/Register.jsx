import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import ButtonSuccess from './ButtonSuccess';
import { createCompany } from '../lib/api';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import logo from '../images/logo.png';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: "",
      address: "",
      phone: "",
      email: "",
      maximum_capacity: "",
      description: "",
      logo: "",
      laoding: false,
      success: false,
    };
  }

  validateField = (fieldValue) => {
    if (fieldValue === " " || fieldValue === "" || fieldValue == false) {
      return false;
    } else {
      return true;
    }
  };

  submit = async (event) => {
    event.preventDefault();
    const checkAddress = this.validateField(this.state.address);
    const checkCompanyName = this.validateField(this.state.company_name);
    if (checkAddress == false || checkCompanyName == false) {
      alert("Please insert a valid address and company name");
    } else {
      const companyObj = {
        company_id: Math.random() * 100,
        company_name: this.state.company_name,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
        maximum_capacity: this.state.maximum_capacity,
        description: this.state.description,
        logo: this.state.logo,
      };
      try {
        let response = await createCompany(companyObj);
        let data = await response.data;
        console.log(data);
        if (data) {
          this.setState({ success: true });
          return true;
        } else {
          return false;
        }
      } catch (e) {
        alert(`Error: ${e}`);
        return false;
      }
    }
  };

  render() {
    return (
      <Container
        component="main"
        className="add-student-container"
        maxWidth="md"
      >
        <Card className="signup-card">
          {" "}
          <CssBaseline />
          <div className="paper">
            <img
              src={logo}
              alt="harry potter icon"
              className="signup-logo"
            ></img>

            <Snackbar open={this.state.success} autoHideDuration={1000}>
              <Alert
                // onClose={this.setState({ success: false })}
                autoHideDuration={1000}
                severity="success"
              >
                Organization adedd successfully!
              </Alert>
            </Snackbar>

            <Typography component="h1" variant="h5" className="subtitle-signup">
              Register your organization{" "}
            </Typography>
            <form className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    onChange={(event) => {
                      this.setState({ company_name: event.target.value });
                    }}
                    name="companyName"
                    variant="outlined"
                    required
                    fullWidth
                    id="companyName"
                    label="Organization Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    onChange={(event) => {
                      this.setState({ address: event.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    onChange={(event) => {
                      this.setState({ phone: event.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Organization's Email"
                    name="email"
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="number"
                    id="maximum_capacity"
                    label="Maximum Capacity"
                    name="maximum_capacity"
                    helperText="You can change this value at any time"
                    onChange={(event) => {
                      this.setState({ maximum_capacity: event.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="logo"
                    label="Logo (url)"
                    name="logo"
                    onChange={(event) => {
                      this.setState({ logo: event.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="description"
                    label="Organization's Description"
                    name="description"
                    onChange={(event) => {
                      this.setState({ description: event.target.value });
                    }}
                  />
                </Grid>

                {/* <Grid item xs={12} sm={6}>
                <CheckboxesGroup passToMain={this.handleDataMagicSkills} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CheckboxesDesiredSkills
                  passToSignup={this.handleDataDesiredSkills}
                />
              </Grid>
              <Grid item xs={11}>
                <CourseSelect passToSignup={this.handleDataCourses} />
              </Grid> */}
              </Grid>
              <Grid container justify="flex-end">
                <Grid item></Grid>
              </Grid>
              <ButtonSuccess submit={this.submit}></ButtonSuccess>
            </form>
          </div>
        </Card>
      </Container>
    );
  }
}

export default Register;
