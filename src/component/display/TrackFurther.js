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
      <div className="further-list">
        <div>
          <i className="fas fa-crosshairs" />
          <div>
            calorie desire
            {currentUser.level_plan}
          </div>
        </div>
        <div>
        <i className="fas fa-clipboard" />
          <div>
            current calorie state
            {currentUser.level_initial}
          </div>
        </div>
        <div>
          <i className="fas fa-envelope" />
          <div>Mailing list</div>
        </div>
        <div>
          <i className="fas fa-user" />
          <div>Your profile</div>
        </div>
        <div>
          <i className="fas fa-wrench" />
          <div>Settings</div>
        </div>
        <div>
          <i className="fas fa-phone" />
          <div>Customer service</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
export default TrackFurther;

TrackFurther.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
};