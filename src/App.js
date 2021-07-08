import React, { Component } from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
//for vaildat data from json file
//https://jsonformatter.curiousconcept.com/#

//https://home.openweathermap.org/api_keys
//username:rawan@nadsoft.net
//password:RawanT@88

//https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

const API_KEY = "71b29cc6efaf5e8d6914fd9f975a883f";

class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Vaild Data",
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          {<Form getWeather={this.getWeather} />}
          {
            <Weather
              tempreature={this.state.tempreature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
