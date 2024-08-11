import React, { useState } from 'react';
import './styles/App.css';
import CustomerCard from './components/CustomerCard';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types/Customer';

const customers: Customer[] = [
  { id: 1, name: 'Rahul Sharma', title: 'CEO', address: '45 Gandhi Nagar, Delhi', description: 'Experienced CEO with over 20 years in the industry.' },
  { id: 2, name: 'Priya Verma', title: 'CTO', address: '32 Nehru Street, Mumbai', description: 'Tech-savvy CTO with a passion for innovation.' },
  { id: 3, name: 'Ankit Patel', title: 'CFO', address: '10 Tagore Road, Ahmedabad', description: 'Finance expert with a sharp eye for detail.' },
  { id: 4, name: 'Sneha Reddy', title: 'CMO', address: '88 MG Road, Bangalore', description: 'Marketing strategist with a global perspective.' },
  { id: 5, name: 'Vikas Singh', title: 'COO', address: '21 Park Avenue, Kolkata', description: 'Operations guru who excels in efficiency.' },
  { id: 6, name: 'Aditi Gupta', title: 'HR Manager', address: '17 Marine Drive, Chennai', description: 'HR leader focused on employee development.' },
  { id: 7, name: 'Rohit Kumar', title: 'Product Manager', address: '56 Sector 14, Gurgaon', description: 'Innovative product manager with a user-centric approach.' },
  { id: 8, name: 'Neha Desai', title: 'UX Designer', address: '78 Link Road, Pune', description: 'Creative UX designer with a knack for aesthetics.' },
  { id: 9, name: 'Aman Joshi', title: 'Software Engineer', address: '65 Residency Road, Hyderabad', description: 'Full-stack developer with a love for coding.' },
  { id: 10, name: 'Meera Iyer', title: 'Data Scientist', address: '89 Brigade Road, Bangalore', description: 'Data scientist who turns data into actionable insights.' },
  { id: 11, name: 'Rajesh Nair', title: 'Sales Manager', address: '34 Fort Area, Kochi', description: 'Sales manager with a record of driving growth.' },
  { id: 12, name: 'Pooja Chawla', title: 'Marketing Head', address: '120 Connaught Place, Delhi', description: 'Marketing head with a passion for branding.' },
];

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(customers[0]);

  return (
    <div className="app">
      <div className="customer-list">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomer?.id === customer.id}
            onClick={() => setSelectedCustomer(customer)}
          />
        ))}
      </div>
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
