import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessDashboard = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <h3> hello </h3>
      <h3>ID: {id}</h3>
    </div>
  );
};

export default BusinessDashboard;
