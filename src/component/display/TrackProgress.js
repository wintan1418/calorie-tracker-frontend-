import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import Chart from '../container/Chart';

const TrackProgress = ({ readings }) => {
  const currentMeasures = readings[readings.length - 1];
  return (
    <div>
      <Navbar title="Progress" />
      <main>
        <h3 className="g-title">Judge your progress.</h3>
        <Chart readings={readings} />
        <div className="g-description">
          <div>Blue - present data</div>
          <div>Red - proposed data</div>
        </div>
        {
                    currentMeasures
                      ? (
                        <div className="progress">
                          <h3>Current Measure</h3>
                          <CircularProgressbar value={currentMeasures.overall_score} maxValue={9} text={`Average Measure\n ${currentMeasures.overall_measure}`} />
                          <div className="t-measures">
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
                      : <div className="empty">Please update...</div>
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
              