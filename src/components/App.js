import React, { Component } from 'react';
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

export default App;
