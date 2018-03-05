import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMap } from '../actions';
import LeafletMap from '../components/LeafletMap';

const mapStateToProps = ({ polygon, Locations }) => {
  return {
    polygon,
    Locations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMap }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
