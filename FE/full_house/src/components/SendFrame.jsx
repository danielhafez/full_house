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
import Title from './Title';

class SendFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
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
    this.setState({ current: response.data });
    this.props.callback(response.data);
  };

  render() {
    return (
      <div>
        {' '}
        <Title>Connect</Title>
        <input
          style={{ marginBottom: '20px' }}
          type='file'
          id='file'
          name='file'
        ></input>
        <Button variant='contained' color='primary' onClick={this.submit}>
          Upload Frame
        </Button>{' '}
        {this.state.current && (
          <Title>Number of people indentified: {this.state.current}</Title>
        )}
      </div>
    );
  }
}

export default SendFrame;
