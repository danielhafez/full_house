import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography
          component='div'
          style={{ backgroundColor: '#ffff', height: '50vh' }}
        >
          <img src='../images/Logo-fullhouse.png' alt='logo_fullHouse' />
        </Typography>
        <div>
          <Button variant='outlined' color='secondary'>
            How full is your favourite place?
          </Button>
          <Button variant='outlined' color='secondary'>
            Register your Business now!
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default LandingPage;
