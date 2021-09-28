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