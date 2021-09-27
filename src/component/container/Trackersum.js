import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchDetailreadings } from '../../actions';
import UnpackTrackDetail from '../display/UnpackTrackDetail';

const TrackDetail = ({ detailreadings, fetchDetailreadings }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchDetailreadings(id);
  }, [fetchDetailreadings, id]);

  return (
    <main>
      {
          Object.keys(detailreadings).length !== 0
            ? <UnpackTrackDetail detailreadings={detailreadings.detailreadings} />
            : (
              <h3>
                Loading...
              </h3>
            )
        }
    </main>
  );
};

const mapStateToProps = (state) => ({
  detailreadings: state.detailreadings,
});

export default connect(mapStateToProps, { fetchDetailreadings })(TrackDetail);

TrackDetail.propTypes = {
  detailreadings: PropTypes.instanceOf(Object).isRequired,
  fetchDetailreadings: PropTypes.func.isRequired,
};
