import React, { Component } from 'react';
import { getAllCompanies } from '../lib/api';
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card';
import '../css/BusinessSearch.css';
import { Link } from '@material-ui/core';

class BusinessSearch extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        { title: 'Logo', field: 'logo' },
        { title: 'Company Name', field: 'company_name' },
        { title: 'Maximum Capacity', field: 'maximum_capacity' },
      ],
      data: [],
    };
  }

  componentDidMount = () => {
    this.getCompanies();
  };

  getCompanies = () => {
    getAllCompanies()
      .then((response) => {
        const companiesdata = response.data;
        const storage = [];
        for (let i = 0; i < companiesdata.length; i++) {
          storage.push(JSON.parse(companiesdata[i]));
        }
        this.setState({ data: storage });
        return response.json;
      })
      .catch(() => {
        alert('Retriving data');
      });
  };

  render() {
    return (
      <Card variant='outlined'>
        <MaterialTable
          title='Find your House'
          columns={this.state.columns}
          data={this.state.data}
          // editable={onRowthis.state.data}
          actions={[
            {
              icon: 'checkbox',
              tooltip: 'Open Company Page',
              onClick: <Link to='/business_profile'></Link>,
            },
          ]}
        />
      </Card>
    );
  }
}

export default BusinessSearch;
