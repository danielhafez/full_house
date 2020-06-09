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

class FinalConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = async (event) => {
    event.preventDefault();
    this.props.submit();
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
            <img src={logo} alt='full-house icon' className='signup-logo'></img>

            <Typography component='h1' variant='h5' className='subtitle-signup'>
              Congratulations {this.props.name}, you can now confirm your
              registration!{' '}
            </Typography>
            <form className='form' noValidate>
              <Grid container justify='center'>
                <Grid className='margin-top'>
                  <Button
                    disabled={this.props.activeStep === 0}
                    onClick={this.props.handleBack}
                    className={this.props.classes}
                  >
                    Back
                  </Button>
                  <ButtonSuccess
                    variant='contained'
                    color='primary'
                    onClick={this.submit}
                  ></ButtonSuccess>
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
              {/* <ButtonSuccess submit={this.submit}></ButtonSuccess> */}
            </form>
          </div>
        </Card>
      </Container>
    );
  }
}

export default FinalConfirmation;
