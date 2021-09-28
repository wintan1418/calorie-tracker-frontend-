import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const MonitorTrackDetail = ({ detailReading }) => {
  const readableDate = (defDateFormat) => {
    const dateObj = new Date(defDateFormat);

    const options = { month: 'long' };
    const month = new Intl.DateTimeFormat('en-US', options).format(dateObj);

    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = `${month}-${day}-${year}`;
    return newdate;
  };