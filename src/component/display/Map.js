import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../circle-styling.css';

const Map = ({ results, clickOnDetailResult }) => {
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
    <div>
      <Navbar title="calorie-cop" />
      <main className="track">
        {
                    results.slice(0).reverse().map((res) => (
                      <Link
                        to={{
                          pathname: `/track/${res.id}`,
                          state: res,
                        }}
                        key={res.id}
                        onClick={() => clickOnDetailResult(res.id)}
                        className="track-item"
                      >
                        <CircularProgressbar value={res.overall_score} maxValue={9} />
                        <div>{readableDate(res.created_at)}</div>
                        <div>
                          <div>{res.overall_score}</div>
                          <div>score</div>
                        </div>
                        <i className="fas fa-arrow-circle-right" />
                      </Link>
                    ))
                }
      </main>
      <Footer />
    </div>
  );
};
export default Map;

Map.propTypes = {
  results: PropTypes.instanceOf(Object).isRequired,
  clickOnDetailResult: PropTypes.func.isRequired,
};
