import React from 'react';
import Header from './components/Header'
import {Balance} from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddNewTranstion from './components/AddNewTransaction'
import {GlobalProvider} from './context/GlobalState'



import './App.css';


function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddNewTranstion/>
      </div>
    </GlobalProvider>
  );
}

export default App;
