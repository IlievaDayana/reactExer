import React, { useState } from 'react';
import FormAdd from './UI/FormAdd';
import UsersList from './UI/UsersList';
import Modal from './UI/Modal';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleUserSubmition = (userData) => {
    setUsers((prevData)=> {
      return [...prevData, userData]
    })
  }

  const handleModalError = (error) => {
    setError(()=> {
      return error;
    })
  }
  const handleClearError = (error) => {
    setError(()=> {
      return '';
    })
  }
  return (
    <div className='main'>
      <FormAdd onSubmitForm={handleUserSubmition} onErrorModal={handleModalError}></FormAdd>
      <UsersList users={users}></UsersList>
      <Modal error={error} onClearError={handleClearError}></Modal>
    </div>
  );
}

export default App;
