import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeafletContainer from '../containers/LeafletContainer';
import FormContainer from '../containers/FormContainer';
import '../style/App.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchAllLocations();
  }

  render() {
    return (
      <main className="App">
        <FormContainer />
        <LeafletContainer />
      </main>
    );
  }
}

App.propTypes = {
  fetchAllLocations: PropTypes.func.isRequired,
};

export default App;
