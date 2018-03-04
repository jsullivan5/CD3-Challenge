import React, { Component } from 'react';
import LeafletContainer from '../containers/LeafletContainer';
import FormContainer from '../containers/FormContainer';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
    this.props.fetchAllLocations();
  }
  render() {
    return (
      <div className="App">
        <FormContainer />
        <LeafletContainer/>
      </div>
    );
  }
}

export default App;
