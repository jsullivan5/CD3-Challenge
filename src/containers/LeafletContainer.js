import { connect } from 'react-redux';
import LeafletMap from '../components/LeafletMap';

const mapStateToProps = ({ polygon }) => {
  return {
    polygon,
  };
};

export default connect(mapStateToProps, null)(LeafletMap);
