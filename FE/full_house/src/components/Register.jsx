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
// import CheckboxesGroup from './Checkbox';
// import CheckboxesDesiredSkills from './CheckboxDesiredSkills';
// import CourseSelect from './Courses';
// // import { createStudent } from '../lib/api';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='https://material-ui.com/'>
        Group #1 Hackathon 2020
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      existing_magic_skills: {},
      desired_magic_skills: [],
      courses: [],
      created_at: '',
      updated_at: '',
      laoding: false,
      success: false,
    };
  }

  handleDataMagicSkills = (dataFromCheckbox) => {
    this.setState({ existing_magic_skills: dataFromCheckbox });
  };

  handleDataDesiredSkills = (dataFromCheckbox) => {
    this.setState({ desired_magic_skills: dataFromCheckbox });
  };

  handleDataCourses = (dataFromCourses) => {
    this.setState({ courses: dataFromCourses });
  };

  validateField = (fieldValue) => {
    if (fieldValue === ' ' || fieldValue === '' || fieldValue == false) {
      return false;
    } else {
      return true;
    }
  };

  submit = async (event) => {
    event.preventDefault();
    const checkName = this.validateField(this.state.first_name);
    const checkLastName = this.validateField(this.state.last_name);
    if (checkName == false || checkLastName == false) {
      alert('Please insert a valid name and last name');
    } else {
      const studentObj = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        existing_magic_skills: this.state.existing_magic_skills,
        desired_magic_skills: this.state.desired_magic_skills,
        courses: this.state.courses,
        created_at: new Date().toISOString(),
        last_update: new Date().toISOString(),
      };
      //   try {
      //     let response = await createStudent(studentObj);
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
        <Card clas>
          {' '}
          <CssBaseline />
          <div className='paper'>
            <img
              src='https://static.thenounproject.com/png/7729-200.png'
              alt='harry potter icon'
              className='signup-logo'
            ></img>
            <Typography component='h1' variant='h3' className='signup-title'>
              FULL HOUSE{' '}
            </Typography>

            <Snackbar open={this.state.success} autoHideDuration={1000}>
              <Alert
                // onClose={this.setState({ success: false })}
                autoHideDuration={1000}
                severity='success'
              >
                Organization adedd successfully!
              </Alert>
            </Snackbar>
            {/* {this.state.success && (
           
          )} */}
            <Typography component='h1' variant='h5'>
              Register your organization{' '}
            </Typography>
            <form className='form' noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(event) => {
                      this.setState({ first_name: event.target.value });
                    }}
                    name='companyName'
                    variant='outlined'
                    required
                    fullWidth
                    id='companyName'
                    label='Organization Name'
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
              <ButtonSuccess submit={this.submit}></ButtonSuccess>
              <Grid container justify='flex-end'>
                <Grid item></Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5} mb={20} pb={5}>
            <Copyright />
          </Box>
        </Card>
      </Container>
    );
  }
}

export default Register;
