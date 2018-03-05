import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postLocation } from '../actions/locationActions';
import Form from '../components/Form';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation: postLocation }, dispatch);
};

export default connect(null, mapDispatchToProps)(Form);
