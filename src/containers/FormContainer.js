import { connect } from 'react-redux';
import { postLocation } from '../actions/locationActions';
import Form from '../components/Form';

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: location => dispatch(postLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
