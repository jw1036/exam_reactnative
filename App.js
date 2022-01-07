import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from "./App.style";

const API_KEY = "0e70add5360fe8f239932874572eb02c";

const icons = {
  Thunderstorm: "lightning",
  Drizzle: "rain",
  Rain: "rains",
  Snow: "snow",
  Atmosphere: "cloudy-gusts",
  Clear: "day-sunny",
  Clouds: "cloudy",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
      return;
    };

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync(
      { accuracy: Location.Accuracy.Highest }
    );
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    if (json.daily) {
      setDays(json.daily);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                  }}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                  }}
                />
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )
        }
      </ScrollView >
    </View >
  );
}
