import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Register from './Register';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import RegisterUser from '../components/RegisterUser';
import FinalConfirmation from './FinalConfirmation';
import { createCompany } from '../lib/api';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='https://material-ui.com/'>
        Group #1 Hackathon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Create an account',
    'Register your organization',
    'You are ready to go!',
  ];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [userInfo, setUserInfo] = React.useState({});
  const [companyInfo, setCompanyInfo] = React.useState({});
  const steps = getSteps();

  const handleNext = (userInformation) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (userInformation) {
      setUserInfo(userInformation);
    }
  };

  const handleNextCompany = (companyInfo) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (companyInfo) {
      setCompanyInfo(companyInfo);
    }
  };

  React.useEffect(() => {
    console.log(companyInfo);
  }, [companyInfo]);

  React.useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const submit = async () => {
    try {
      let response = await createCompany(companyInfo);
      let data = await response.data;
      if (!data) {
        alert('Impossible to register the company information');
        return false;
      }
    } catch (e) {
      alert(`Error: ${e}`);
      return false;
    }
    try {
      userInfo.company_id = companyInfo.company_id;
      console.log(userInfo);
    } catch (e) {
      console.log(e);
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <RegisterUser
              handleNext={handleNext}
              handleBack={handleBack}
              clasess={classes.backButton}
              activeStep={activeStep}
              steps={steps}
            ></RegisterUser>
          </div>
        );
      case 1:
        return (
          <Register
            handleNext={handleNextCompany}
            handleBack={handleBack}
            clasess={classes.backButton}
            activeStep={activeStep}
            steps={steps}
          ></Register>
        );
      case 2:
        return (
          <FinalConfirmation
            handleNext={handleNextCompany}
            handleBack={handleBack}
            clasess={classes.backButton}
            activeStep={activeStep}
            steps={steps}
            name={userInfo.first_name}
            submit={submit}
          ></FinalConfirmation>
        );
      default:
        return 'Unknown stepIndex';
    }
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
        )}
        <Box mt={5} mb={20} pb={5}>
          <Copyright />
        </Box>
      </div>
    </div>
  );
}
