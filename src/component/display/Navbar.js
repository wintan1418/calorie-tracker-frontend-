import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  const history = useHistory();

  const logOut = () => {
    sessionStorage.removeItem('token');
    history.push('/log_in');
  };