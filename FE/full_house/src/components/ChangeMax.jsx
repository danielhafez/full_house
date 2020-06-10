import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import SendFrame from '../components/SendFrame';
import Button from '@material-ui/core/Button';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function ChangeMax(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  const submit = () => {
    props.callback(value);
  };
  return (
    <React.Fragment>
      <Title>Change maximum occupancy</Title>
      <Typography style={{ marginBottom: '20px' }} component='p' variant='h6'>
        Current: {props.capacity}
      </Typography>

      <TextField
        id='outlined-number'
        label='New Maximum Occupancy'
        type='number'
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        style={{ marginTop: '10px' }}
        item
        xs={9}
        md={6}
        lg={3}
        variant='contained'
        color='primary'
        onClick={submit}
      >
        Submit
      </Button>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View government regulations
        </Link>
        {/* <SendFrame></SendFrame> */}
      </div>
    </React.Fragment>
  );
}
