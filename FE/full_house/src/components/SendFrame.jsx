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
import { createCompany, sendImage } from '../lib/api';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import logo from '../images/logo.png';

class SendFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = async (event) => {
    const response = await sendImage(logo);
    console.log(response);
    const data = response.data;
    console.log(data);
  };

  render() {
    return <Button onClick={this.submit}>Send Image</Button>;
  }
}

export default SendFrame;
