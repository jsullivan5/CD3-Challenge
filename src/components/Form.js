import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      latitude: '',
      longitude: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveLocation(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, latitude, longitude } = this.state;

    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="latitude">
          Lat
          <input
            id="latitude"
            name="latitude"
            type="text"
            value={latitude}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="longitude">
          Lon
          <input
            id="longitude"
            name="longitude"
            type="text"
            value={longitude}
            onChange={this.handleChange}
          />
        </label>
        <input
          type="submit"
          value="Save"
        />
      </form>
    );
  }
}


export default Form;
