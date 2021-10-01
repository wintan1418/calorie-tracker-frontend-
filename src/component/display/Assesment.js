import React from "react";
import {Redirect, useHistory} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import AssessmentForm from './AssessmentForm';


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
      history.push('/tracker');
    });
  }
 const handleCalorieMeasure = (e) => {
   e.preventDefault();
   const first_measure = e.target[0].value;
   const second_measure = e.target[1].value;
   const third_measure = e.target[2].value;
  
   const preOverAll = (
     parseFloat(first_measure) + parseFloat(second_measure) + parseFloat(third_measure))/3;

     const roundedOverAll = Math.round(preOverAll * 10)/ 10;
   
      const userInput = {
        first_measure_reading: first_measure,
        second_measure_reading: second_measure,
        third_measure_reading: third_measure,
        overall_measure: roundedOverAll,
      
      };
      const url = 'https://welltrack-api.herokuapp.com//readings';
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
        <AssessmentForm meal="first_measure_reading" />
        <AssessmentForm meal="second_measure_reading" />
        <AssessmentForm meal="third_measure_reading" />
        <button type="submit">Submit your entry</button>
      </form>
    </main>
    <Footer/>
  </div>
);
  
};

export default Assesment;