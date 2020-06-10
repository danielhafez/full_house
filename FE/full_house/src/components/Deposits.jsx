import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import SendFrame from '../components/SendFrame';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {console.log(props)}
      <Title>Current Occupancy</Title>
      <Typography component='p' variant='h4'>
        {props.occupancy}%
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        Last Update at: {new Date().getHours()}:00
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View report
        </Link>
        {/* <SendFrame></SendFrame> */}
      </div>
    </React.Fragment>
  );
}
