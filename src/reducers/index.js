import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import polygonReducer from './polygonReducer';

const RootReducer = combineReducers({
  Locations,
  polygon: polygonReducer,
});

export default RootReducer;
