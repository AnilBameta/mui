import React from 'react'
import CheckboxList from '../components/CheckboxList'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'
import Table from '../components/Table'
const FrontPage = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Table />
      <CheckboxList />
    </div>
  )
}

export default FrontPage
