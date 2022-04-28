import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Colors from '../shared/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Events from '../components/Events';
import ImageSlider from '../components/ImageSlidder';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView scrollEventThrottle={16}>
      <View style={styles.weatherView}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('WeatherScreen');
          }}>
          <MaterialCommunityIcons
            name="weather-cloudy"
            size={26}
            color={Colors.white}
          />
          <Text style={{color: Colors.white}}>{}19F</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: '700', paddingHorizontal: 15}}>
          Welcome to Kent Ski Resort!
        </Text>
        <Text style={{paddingHorizontal: 15}}>
          Visit our image gallery for more!
        </Text>
      </View>
      <ImageSlider />
      <View style={{marginTop: 40, paddingHorizontal: 15}}>
        <Text style={{fontSize: 22, fontWeight: '700', paddingHorizontal: 15}}>
          Upcoming Events
        </Text>
        <Text style={{paddingHorizontal: 15}}>
          Get involved. Discover your purpose.
        </Text>
      </View>
      <View style={{height: 130, marginTop: 20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Events
            imageUri={require('../assets/icons/snowboarding.jpg')}
            eventDescription="Event Description"
          />
          <Events
            imageUri={require('../assets/icons/snowboarding.jpg')}
            eventDescription="Event Description"
          />
          <Events
            imageUri={require('../assets/icons/snowboarding.jpg')}
            eventDescription="Event Description"
          />
          <Events
            imageUri={require('../assets/icons/snowboarding.jpg')}
            eventDescription="Event Description"
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  weatherView: {
    backgroundColor: Colors.metallicBlue,
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
});

export default HomeScreen;
