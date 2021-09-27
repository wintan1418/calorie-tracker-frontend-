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
  
   const preOverAll = (
     parseFloat(blah) + parseFloat(blah) + parseFloat(blah))/3;

     const roundedOverAll = Math.round(preOverAll * 10)/ 10;
   
      const userInput = {
        first_measure: blah,
        first_measure: blah,
        first_measure: blah,
        overall_score: roundedOverAll,
      
      };
      const url = 'heroku/readings';
      postData(url, userInput);
 };
 if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
   return <Redirect to="/log_in" />;
 }
return (
  <div>
    <Navbar title="Add measurement"/>
    <main>
      <form onSubmit={(e) => handleCalorieMeasure(e)} className="measurement">
        <MeasurementForm meal="first_measure" />
        <MeasurementForm meal="first_measure" />
        <MeasurementForm meal="first_measure" />
        <button type="submit">Submit your entry</button>
      </form>
    </main>
    <Footer/>
  </div>
);
  
};

export default Assesment;