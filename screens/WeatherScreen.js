import React, {Component} from 'react';
import Geolocation from 'react-native-geolocation-service';
import Header from '../shared/Header';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';

export class Weather extends Component {
  state = {
    lat: null,
    lon: null,
    data: null,
  };
  componentDidMount() {
    this.getLocation();
  }
  getLocation = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          this.getWeather();
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      console.log('passed position');
    }
  };

  getWeather = async () => {
    if (this.state.lat != null) {
      const lat = this.state.lat;
      const lon = this.state.lon;
      console.log('before URL');
      const API_KEY = 'ed91337f19467e3030c1348f7ec84272';
      const URL =
        'http://api.openweathermap.org/data/2.5/weather?lat=' +
        lat +
        '&lon=' +
        lon +
        '&appid=' +
        API_KEY;
      console.log('URL' + URL);
      //http://api.openweathermap.org/data/2.5/weather?lat=37.4219983&lon=-122.084&appid=ed91337f19467e3030c1348f7ec84272
      const response = await fetch(URL);
      console.log('data is available');

      const data = await response.json();
      console.log(data);
      this.setState({
        data: data,
      });
    }
    console.log('data is available');
  };
  //to remove floating point from weather elements
  round = temp => {
    let value = temp * 100 + 0.5;
    let finalTemp = Math.trunc(value / 100);
    console.log('passed convert');
    return finalTemp;
  };

  render() {
    const {data} = this.state;
    if (data != null) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <Text style={styles.title}>Weather</Text>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <View>
            <Text style={styles.data}>
              Temperature: {this.round(data.main.temp - 272.15)} &#176; C
            </Text>
            <Text style={styles.data}>pressure: {data.main.pressure} hpa</Text>
            <Text style={styles.data}>Humidity: {data.main.humidity}%</Text>
            <Text style={styles.data}>
              Low: {this.round(data.main.temp_min - 272.15)} &#176; C
            </Text>
            <Text style={styles.data}>
              High: {this.round(data.main.temp_max - 272.15)} &#176; C
            </Text>
            <Text style={styles.data}> Speed: {data.wind.speed}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Loading...</Text>
          <StatusBar barStyle="light-content" backgroundColor="green" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
  },
  data: {
    fontSize: 25,
    alignItems: 'center',
  },
});

export default Weather;
