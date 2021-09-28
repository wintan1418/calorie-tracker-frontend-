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

  return (
    <><>
      <Navbar title="Calorie-cop" />
      <div className="t-con">
        <div className="t-date">{readableDate(detailReading.created_at)}</div>
        <CircularProgressbar value={detailReading.overall_score} maxValue={9} text={`Overall Score\n ${detailReading.overall_score}`} />
        <div className="t-scores">
          <div>
            <i className="fas fa-mic" />
            <div>
              Morning:
              {detailReading.first_measure}
            </div>
          </div>
          <div>
            <i className="fas fa-" />
            <div>
              Afternoon:
              {detailReading.second_measure}
            </div>
          </div>
          <div>
            <i className="fas fa-" />
            <div>
              Evening:
              {detailReading.third_measure}
            </div>
          </div>
        </div>
      </div>
    </><Footer /></>
    
  );
};
export default MonitorTrackDetail;

MonitorTrackDetail.propTypes = {
  detailReading: PropTypes.instanceOf(Object).isRequired,
};
