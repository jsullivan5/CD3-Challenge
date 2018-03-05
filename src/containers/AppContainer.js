import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllLocations } from '../actions/locationActions';
import App from '../components/App';


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
