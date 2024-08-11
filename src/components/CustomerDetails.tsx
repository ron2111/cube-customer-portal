import React from 'react';
import { Customer } from '../types/Customer';
import PhotoGrid from './PhotoGrid';
import './CustomerDetails.css';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <h4>{customer.title}</h4>
      <p>{customer.address}</p>
      <p>{customer.description}</p>
      <PhotoGrid customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
