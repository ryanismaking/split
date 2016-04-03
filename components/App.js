import React from 'react'
import AddBill from '../containers/AddBill'
import HousematesList from '../containers/HousematesList'
import TransactionsList from '../containers/TransactionsList'

const App = () => (
  <div>
    <h1>Split</h1>
    <AddBill />
    <HousematesList />
    <TransactionsList />
  </div>
)

export default App
