import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json()
      .then((data) => {
        sessionStorage.setItem('token', JSON.stringify(data.auth_token));
        history.push('/measurement');
      });
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    const userInput = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      password_confirmation: e.target[3].value,
      level_initial: e.target[4].value,
      level_plan: e.target[5].value,
      due_date: e.target[6].value,
    };

    const urlSignUp = 'heroku/signup';
    postData(urlSignUp, userInput);
  };