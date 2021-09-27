import React from "react";
import {Redirect, useHistory} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import AssesmentForm from './AssessmentForm';


const Assesment = () => {
  const history = useHistory();

  async function postData(url ='', data = {}) {
    const token = sessionStorage.getItem('token');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    return response.json()
    .then(() => {
      history.push('/track');
    });
  }
 const handleCalorieMeasure = (e) => {
   e.preventDefault();
   const blah = e.target[0].value;
   const blah = e.target[1].value;
   const blah = e.target[2].value;
  

 }

  
}