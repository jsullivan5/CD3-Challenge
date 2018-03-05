import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import polygonReducer from './polygonReducer';
import mapReducer from './mapReducer';

const RootReducer = combineReducers({
  Locations,
  polygon: polygonReducer,
  mapRef: mapReducer,
});

export default RootReducer;
