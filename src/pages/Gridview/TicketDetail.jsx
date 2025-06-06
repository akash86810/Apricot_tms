import { useParams } from 'react-router-dom';
import React from 'react';
import Header from './Header';

const TicketDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Header></Header>
      <h2>Ticket Details for ID: {id}</h2>
      {/* You can fetch more info here if needed */}
    </div>
  );
};

export default TicketDetail;
