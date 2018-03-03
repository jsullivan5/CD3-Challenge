import { connect } from 'react-redux';
import Form from '../components/Form';

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: (location) => {
      dispatch({
        type: 'SAVE_LOCATION',
        data: location,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
