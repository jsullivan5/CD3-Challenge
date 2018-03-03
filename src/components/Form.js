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
  }

  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, latitude, longitude } = this.state;

    return (
      <form className="form">
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <label htmlFor="latitude">
          Lat
          <input
            id="latitude"
            name="latitude"
            value={latitude}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <label htmlFor="longitude">
          Lon
          <input
            id="longitude"
            name="longitude"
            value={longitude}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <input
          type="submit"
          value="Save"
          onClick={e => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value,
          })}
        />
      </form>
    );
  }
}


export default Form;
