<<<<<<< HEAD
import React from 'react';
import MaterialTable from 'material-table';
import { getAllCompanies } from '../lib/api';

export default function BusinessSearch() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Logo', field: 'logo' },
      { title: 'Company Name', field: 'company_name' },
    ],
    data: [],
  });

  const componentDidMount = () => {
    getCompanies();
  };

  const getCompanies = () => {
    getAllCompanies()
      .then((response) => {
        const companiesdata = response.data;
        this.setState({ data: companiesdata });
        return response.json;
      })
      .catch(() => {
        alert('Retriving data');
      });
  };
=======
import React from 'react'
>>>>>>> 18de39cee912c4459227e458f3b784271878269e

export default function BusinessProfile() {
  return (
<<<<<<< HEAD
    <MaterialTable
      title='Editable Example'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
=======
    <div>
      
    </div>
  )
>>>>>>> 18de39cee912c4459227e458f3b784271878269e
}
