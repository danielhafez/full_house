import React from 'react';
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
import Button from '@material-ui/core/Button';

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  validateField = (fieldValue) => {
    if (fieldValue === ' ' || fieldValue === '' || fieldValue == false) {
      return false;
    } else {
      return true;
    }
  };

  submit = async (event) => {
    event.preventDefault();
    const checkEmail = this.validateField(this.state.email);
    const checkPassword = this.validateField(this.state.password);
    if (checkEmail == false || checkPassword == false) {
      alert('Please insert a valid email and password');
    } else {
      const userObj = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
      };
      this.props.handleNext(userObj);

      //   try {
      //     let response = await createCompany(companyObj);
      //     let data = await response.data;
      //     console.log(data);
      //     if (data) {
      //       this.setState({ success: true });
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   } catch (e) {
      //     alert(`Error: ${e}`);
      //     return false;
      //   }
    }
  };

  render() {
    return (
      <Container
        component='main'
        className='add-student-container'
        maxWidth='md'
      >
        <Card className='signup-card'>
          {' '}
          <CssBaseline />
          <div className='paper'>
            <img src={logo} alt='full-house logo' className='signup-logo'></img>

            <Snackbar open={this.state.success} autoHideDuration={1000}>
              <Alert
                // onClose={this.setState({ success: false })}
                autoHideDuration={1000}
                severity='success'
              >
                Information saved successfully!
              </Alert>
            </Snackbar>

            <Typography component='h1' variant='h5' className='subtitle-signup'>
              Create an account{' '}
            </Typography>
            <form className='form' Validate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='fname'
                    onChange={(event) => {
                      this.setState({ first_name: event.target.value });
                    }}
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='lname'
                    onChange={(event) => {
                      this.setState({ last_name: event.target.value });
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    type='password'
                    id='password'
                    label='Password'
                    name='password'
                    helperText=''
                    onChange={(event) => {
                      this.setState({ password: event.target.value });
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container justify='center'>
                <Grid className='margin-top'>
                  <Button
                    disabled={this.props.activeStep === 0}
                    onClick={this.props.handleBack}
                    className={this.props.classes}
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={this.submit}
                  >
                    {this.props.activeStep === this.props.steps.length - 1
                      ? 'Finish'
                      : 'Next'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Card>
      </Container>
    );
  }
}

export default RegisterUser;
