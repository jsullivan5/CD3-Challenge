import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lat: '',
      lng: '',
    };
    this.clearInputs = this.clearInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearInputs() {
    this.setState({
      name: '',
      lat: '',
      lng: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, lat, lng } = this.state;

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
    const { name, lat, lng } = this.state;

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
        <label htmlFor="lat">
          Lat
          <input
            id="lat"
            name="lat"
            type="text"
            value={lat}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="lng">
          Lon
          <input
            id="lng"
            name="lng"
            type="text"
            value={lng}
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
