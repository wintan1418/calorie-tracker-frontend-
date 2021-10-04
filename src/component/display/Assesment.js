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
 const handleAddingCalories = (e) => {
   e.preventDefault();
   const first_measure_reading = e.target[0].value;
   const second_measure_reading = e.target[1].value;
   const third_measure_reading = e.target[2].value;
  
   const preOverAll = (
     parseFloat(first_measure_reading) + parseFloat(second_measure_reading) + parseFloat(third_measure_reading))/3;

     const roundedOverAll = Math.round(preOverAll * 10)/ 10;
   
      const userInput = {
        first_measure: first_measure_reading,
        second_measure: second_measure_reading,
        third_measure: third_measure_reading,
        overall_measure: roundedOverAll,
      
      };
      const url = 'https://welltrack-api.herokuapp.com/readings';
      postData(url, userInput);
 };
 if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
   return <Redirect to="/log_in" />;
 }
return (
  <div>
    <Navbar title="Add measurement"/>
    <main>
      <form onSubmit={(e) => handleAddingCalories(e)} className="measurement">
        <AssessmentForm meal="first_measure" />
        <AssessmentForm meal="second_measure" />
        <AssessmentForm meal="third_measure" />
        <button type="submit">Submit your entry</button>
      </form>
    </main>
    <Footer/>
  </div>
);
  
};

export default Assesment;