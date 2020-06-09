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
<<<<<<< HEAD
          <Button variant="outlined" color="secondary">
            <Link to="/all_companies">How full is your favourite place?</Link>
          </Button>
          <Button variant="outlined" color="secondary">
=======
          <Button
            variant='outlined'
            color='secondary'
            onClick={LookForBusiness}
          >
            How full is your favourite place?
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={LookForBusiness}
          >
>>>>>>> 287552f6dba311c988b3691d63ae6d3dcf503f0d
            Register your Business now!
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default LandingPage;
