import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/LandingPage.css';

const LandingPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography
          component='div'
          style={{
            backgroundColor: '#ffff',
            height: '50vh',
            marginTop: '15px',
          }}
        >
          <img src={logo} alt='logo' className='logo' />
        </Typography>
        <div>
          <Button variant='outlined' color='secondary'>
            <Link to='/all_companies'>How full is your favourite place?</Link>
          </Button>
          <Button variant='outlined' color='secondary'>
            <Link to='/register'> Register your Business now!</Link>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default LandingPage;
