import { Link, useHistory } from 'react-router-dom';

const LogIn = () => {
  const history = useHistory();

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(data),
    });
    return response.json()
      .then((data) => {
        sessionStorage.setItem('token', data.auth_token);
        history.push('/assesment');
      });
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const userInput = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const urlLogIn = 'http://127.0.0.1:3005/auth/login';
    postData(urlLogIn, userInput);
  };

  return (
    <div className="authen-page">
      <div>
        <i className="fas fa-user-circle" />
      </div>

      <form onSubmit={(e) => handleLogin(e)}>
        <input type="email" placeholder="Your email" required />

        <input type="password" placeholder="Password" required />

        <button type="submit">Log in</button>
      </form>

      <div className="authen-text">
        <div>Yet to sign up? click here</div>
        <div>
          Go to
          <Link to="/register">Sign up page</Link>
        </div>
      </div>

      <div className="calorie-text authen-text">
      </div>
    </div>
  );
};

export default LogIn;
