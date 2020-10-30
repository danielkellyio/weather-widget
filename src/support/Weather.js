import axios from "axios";
import qs from "qs";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = `25d3471bb4183e1cf4fb28cb10721ede`;

export default class Weather {
  constructor() {
    this.query = {
      appid: apiKey
    };
  }
  fahrenheit() {
    this.query.units = "imperial";
    return this;
  }
  celsius() {
    this.query.units = "metric";
    return this;
  }
  byGeoLocation({ lat, long }) {
    this.query.lat = lat;
    this.query.lon = long;
    return this;
  }
  byZip(zip) {
    this.query.zip = zip;
    return this;
  }

  byCity(city) {
    this.query.q = city;
    return this;
  }

  async get() {
    return await axios.get(`${baseUrl}?${qs.stringify(this.query)}`);
  }
}
