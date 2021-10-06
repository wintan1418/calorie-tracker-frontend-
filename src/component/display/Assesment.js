import React from "react";
import {Redirect, useHistory} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import AssessmentForm from './AssessmentForm';


const Assesment = () => {
  const history = useHistory();

  async function postData(url ='', data = {}) {
    console.log(data);
    const token = sessionStorage.getItem('token');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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
   const first = e.target[0].value;
   const second = e.target[1].value;
   const third= e.target[2].value;
  
   const preOverAll = (
     parseFloat(first) + parseFloat(second) + parseFloat(third))/3;

     const roundedOverAll = Math.round(preOverAll * 10)/ 10;
   
      const userInput = {
        first_measure: first,
        second_measure: second,
        third_measure: third,
        overall_measure: roundedOverAll,
      
      };
      const url = 'https://healthjuwon.herokuapp.com//readings';
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
        <AssessmentForm measure="first_measure" />
        <AssessmentForm measure="second_measure" />
        <AssessmentForm measure="third_measure" />
        <button type="submit">Submit your entry</button>
      </form>
    </main>
    <Footer/>
  </div>
);
  
};

export default Assesment;