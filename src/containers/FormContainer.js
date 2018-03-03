import { connect } from 'react-redux';
import { saveLocation } from '../actions/locationActions';
import Form from '../components/Form';

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: location => dispatch(saveLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
