import { Link, useHistory } from 'react-router-dom';

const Register = () => {
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
        history.push('/assesment');
      });
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    const userInput = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      present_measure: e.target[3].value,
      proposed_measure: e.target[4].value,
      due_date: e.target[5].value,
    };

    const urlregister = 'heroku/register';
    postData(urlregister, userInput);
  };
  return (
    <div className="authen-page">
      <div>
        <i className="fas fa-user-circle" />
      </div>
      <form onSubmit={(e) => handleRegister(e)}>
        <input type="text" placeholder="Your name please" required />
        <input type="email" placeholder="Your email please" required />
        <input type="password" placeholder="Password" required />

        <label htmlFor="present_measure">
          <span>Your current calorie  measure</span>
          <input type="number" step=".5" min="0" max="9" name="level_initial" id="level_initial" placeholder="Enter 0 ~ 9" required />
        </label>

        <label htmlFor="proposed_measure">
          <span>Your proposed calorie measure</span>
          <input type="number" step=".5" min="0" max="9" name="level_plan" id="level_plan" placeholder="Enter 0 ~ 9" required />
        </label>

        <button type="submit">Submit</button>
      </form>
      <div className="authen-text">
        Back to
        <Link to="/log_in">Log in page</Link>
      </div>
    </div>
  );
};

export default Register;