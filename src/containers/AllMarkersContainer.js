import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyPolygon } from '../actions';
import AllMarkers from '../components/AllMarkers';

const mapStateToProps = ({ Locations }) => {
  return { locations: Locations };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ modifyPolygon }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
