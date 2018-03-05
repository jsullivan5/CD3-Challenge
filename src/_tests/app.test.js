import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../components/App';
import fakeLocations from './testLocations';


describe('App', () => {
  const initialState = {
    Locations: fakeLocations,
    polygon: [],
  };
  const mockStore = configureStore();
  let store;
  let mockfetchAllLocations;

  beforeEach(() => {
    store = mockStore(initialState);
    mockfetchAllLocations = jest.fn();

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App fetchAllLocations={mockfetchAllLocations} />
      </Provider>,
      div
    );
  });

  it('renders without crashing', () => { });
  it('Should fetch locations on mounting', () => {
    expect(mockfetchAllLocations.mock.calls.length).toBe(1);
  });
});
