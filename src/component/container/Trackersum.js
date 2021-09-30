import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchDetailreadings } from '../../actions';
import MonitorTrackDetail from '../display/MonitorTrackDetail';

const TrackDetail = ({ detailReadings, fetchDetailReadings }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchDetailreadings(id);
  }, [fetchDetailReadings, id]);

  return (
    <main>
      {
          Object.keys(detailReadings).length !== 0
            ? <MonitorTrackDetail detailReadings={detailReadings.detailReadings} />
            : (
              <h3>
                Loading... </h3>
            )
        }
    </main>
  );
};

const mapStateToProps = (state) => ({
  detailreadings: state.detailReadings,
});

export default connect(mapStateToProps, { fetchDetailreadings })(TrackDetail);

TrackDetail.propTypes = {
  detailReadings: PropTypes.instanceOf(Object).isRequired,
  fetchDetailreadings: PropTypes.func.isRequired,
};
