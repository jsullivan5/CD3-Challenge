import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lat: '',
      lng: '',
      errors: {},
    };
    this.clearInputs = this.clearInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateLatLng = this.validateLatLng.bind(this);
  }

  validateLatLng() {
    const { lat, lng } = this.state;
    const newErrors = {};

    if (!isFinite(lat) && !Math.abs(lat) <= 90) {
      newErrors.invalidLat = true;
    }

    if (!isFinite(lng) && !Math.abs(lng) <= 180) {
      newErrors.invalidLng = true;
    }

    if (newErrors.invalidLat || newErrors.invalidLng) {
      this.setState({ errors: newErrors });
      return true;
    }

    return false;
  }

  clearInputs() {
    this.setState({
      name: '',
      lat: '',
      lng: '',
      errors: {},
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, lat, lng } = this.state;

    if (this.validateLatLng()) { return; }

    this.props.saveLocation({
      name,
      lat: parseFloat(lat, 10),
      lng: parseFloat(lng, 10),
    }, () => this.clearInputs());
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, lat, lng, errors } = this.state;
    const isEnabled = name !== '' && lat !== '' && lng !== '';

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
            placeholder="Dallas"
          />
        </label>
        <label htmlFor="lat">
          Lat
          <input
            id="lat"
            name="lat"
            type="text"
            value={lat}
            onChange={this.handleChange}
            placeholder="32.7767"
          />
        </label>
        {errors.invalidLat && <p className="error">Invalid Latitude</p>}
        <label htmlFor="lng">
          Lon
          <input
            id="lng"
            name="lng"
            type="text"
            value={lng}
            onChange={this.handleChange}
            placeholder="-96.7970"
          />
        </label>
        {errors.invalidLng && <p className="error">Invalid Longitude</p>}
        <input
          type="submit"
          value="Save"
          disabled={!isEnabled}
        />
      </form>
    );
  }
}

Form.propTypes = {
  saveLocation: PropTypes.func.isRequired,
};

export default Form;
