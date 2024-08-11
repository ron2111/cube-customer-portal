import React from 'react';
import { Customer } from '../types/Customer';
import './CustomerCard.css';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onClick }) => {
  return (
    <div className={`customer-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
      <p>{customer.description}</p>
    </div>
  );
};

export default CustomerCard;
