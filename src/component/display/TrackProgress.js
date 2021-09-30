import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import MyChart from '../container/Chart';

const TrackProgress = ({ readings }) => {
  const currentMeasures = readings[readings.length - 1];
  return (
    <div>
      <Navbar title="Progress" />
      <main>
        <h3 className="g-title">Judge your progress.</h3>
        <MyChart readings={readings} />
        <div className="g-description">
          <div>Blue - actual data</div>
          <div>Red - planned data</div>
        </div>
        {
                    currentMeasures
                      ? (
                        <div className="progress">
                          <h3>Current Measure</h3>
                          <CircularProgressbar value={currentMeasures.overall_score} maxValue={9} text={`Overall Score\n ${currentMeasures.overall_score}`} />
                          <div className="t-scores">
                            <div>
                              <i className="fas fa-heartbeat" />
                              <div>
                                first_measure:
                                {currentMeasures.first_measure}
                              </div>
                            </div>
                            <div>
                              <i className="fas fa-heartbeat" />
                              <div>
                                second_measure:
                                {currentMeasures.second_measure}
                              </div>
                            </div>
                            <div>
                              <i className="fas fa-heartbeat" />
                              <div>
                                third_measure:
                                {currentMeasures.third_measure}
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      )
                      : <div>Loading...</div>
                    }
                    </main>
                    <Footer />
                  </div>
                );
              };
              
              export default TrackProgress;
              
              TrackProgress.propTypes = {
                readings: PropTypes.instanceOf(Object).isRequired,
              };
              