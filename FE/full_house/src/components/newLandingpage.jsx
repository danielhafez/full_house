import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import image from '../images/business.png';
import hospital from '../images/hospital.png';
import institution from '../images/Institution-512.png';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Group#1 Hackathon 2020
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

const NewLandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <img src={logo} alt='logo' className='logo' />
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              An AI powered system that allows you to plan your day safely. Full
              House empowers decision-makers with real-time data about their
              organizations and keeps the world safer
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    <Link style={{ color: 'white' }} to='/all_companies'>
                      Explore
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    <Link to='/register'> Register your organization now!</Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Typography
            component='h1'
            variant='h4'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Use Cases
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={image}
                  title='Image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Businesses
                  </Typography>
                  <Typography>
                    Don't put your client at risk. Be informed about your
                    occupancy and get advantage of low-occupancy times
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button align='center' size='small' color='primary'>
                    Register Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={hospital}
                  title='Image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Emergency Care
                  </Typography>
                  <Typography>
                    We empower first-aid provider with real time data about the
                    nearest facilities to allow them to make the best decisions
                    and save lives.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    Learn More{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={institution}
                  title='Image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Public Office
                  </Typography>
                  <Typography>
                    We help decision-makers to offer the best services to their
                    citizins, avoiding waiting time and crowds.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          FullHouse
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Gabriel Bruck, Daniel Hafez, Or Gindes, Dor Sklar
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default NewLandingPage;
