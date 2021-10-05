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
        console.log(data)
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
      age: e.target[5].value,
      sex: e.target[6].value
  
      
    };

    const urlregister = 'https://juwons.herokuapp.com/register';
    postData(urlregister, userInput);
  };
  return (
    <div className="authen-page">
      <div>
        <i className="fas fa-user-circle" />
      </div>
      <form onSubmit={(e) => handleRegister(e)}>
        <input type="text" placeholder="Your username please" required />
        <input type="email" placeholder="Your email please" required />
        <input type="password" placeholder="Password" required />
        <input type="age" placeholder="Your age please" required />
        <input type="sex" placeholder="male/female" required />
      

        <label htmlFor="present_measure">
          <span>Your current calorie  measure</span>
          <input type="number" step=".5" min="0" max="20" name="present_measure" id="present_measure" placeholder="Enter 0 ~ 9" required />
        </label>

        <label htmlFor="proposed_measure">
          <span>Your proposed calorie measure</span>
          <input type="number" step=".5" min="0" max="20" name="proposed_measure" id="proposed_measure" placeholder="Enter 0 ~ 9" required />
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