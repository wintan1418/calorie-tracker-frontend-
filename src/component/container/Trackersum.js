import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchDetailReadings } from '../../action/index';
import MonitorTrackDetail from '../display/MonitorTrackDetail';

const TrackDetail = ({ detailReadings, fetchDetailReadings }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchDetailReadings(id);
  }, [fetchDetailReadings, id]);
  console.log(detailReadings);
  return (
    <main>
      {
          Object.keys(detailReadings).length !== 0
            ? <MonitorTrackDetail detailReading={detailReadings} />
            : (
              <h3 className="wait">
                Loading...
                {' '}
              </h3>
            )
        }
    </main>
  );
};

const mapStateToProps = (state) => ({
  detailReadings: state.detailReading,
});

export default connect(mapStateToProps, { fetchDetailReadings })(TrackDetail);

TrackDetail.propTypes = {
  detailReadings: PropTypes.instanceOf(Object).isRequired,
  fetchDetailReadings: PropTypes.func.isRequired,
};
