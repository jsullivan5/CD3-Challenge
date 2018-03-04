import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers';
import { modifyPolygon } from '../actions';

const mapStateToProps = ({ Locations }) => {
  return { locations: Locations };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyPolygon: location => dispatch(modifyPolygon(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
