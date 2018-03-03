import React, { Component } from 'react';


class Form extends Component {
  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
  }
  render() {
    return (
      <form className="form">
        <label htmlFor="name">
          Name
          <input
            id="name"
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label htmlFor="latitude">
          Lat
          <input
            id="latitude"
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label htmlFor="longitude">
          Lon
          <input
            id="longitude"
            ref={(input) => { this.lng = input }}
            type="text"/>
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;
