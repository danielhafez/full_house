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
import axios from 'axios';

class SendFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = async (event) => {
    let formData = new FormData();
    let imagefile = document.querySelector('#file');
    formData.append('image', imagefile.files[0]);
    let response = await axios.post('http://127.0.0.1:5000/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
  };

  render() {
    return (
      <div>
        {' '}
        <input type='file' id='file' name='file'></input>
        <Button onClick={this.submit}>Send Image</Button>{' '}
      </div>
    );
  }
}

export default SendFrame;
