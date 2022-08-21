
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
const Table = ({data}) => {
  
  return (
    <>
      <h1 className='mt-5'>Submitted Data</h1>
      {/* {items.length==0 && <h2>No Data Submitted</h2>} */} 
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Sex</th>
            <th scope="col">Mobile</th>
            <th scope="col">Govt Id</th>
            <th scope="col">Guardian Details</th>
            <th scope="col">Email</th>
            <th scope="col">Emergency Number</th>
            <th scope="col">Address</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th scope="col">Pincode</th>
            <th scope="col">Occupation</th>
            <th scope="col">Religion</th>
            <th scope="col">Martial Status</th>
            <th scope="col">Blood Group</th> 
          </tr>
        </thead>
        <tbody> 
          {data ? data.map((each,i) => {
            return <tr key={i+1}>
              <td>{each.name}</td>
            </tr>
          }) : ""} 
        </tbody>
      </table> 
    </>
  )
}

export default Table