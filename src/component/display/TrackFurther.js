import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const TrackFurther = ({ currentUser }) => (
  <div>
    <Navbar title="More" />
    <main>
      <div className="m-header">
        <i className="fas fa-user-circle p-avat" />
        <div>
          <div>{currentUser.name}</div>
          <div className="m-email">{currentUser.email}</div>
        </div>
      </div>
      <div className="more-list">
        <div>
          <i className="fas fa-crosshairs" />
          <div>
            calorie desire
            {currentUser.level_plan}
          </div>
        </div>
        <div></div>