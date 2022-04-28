import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../shared/Colors';
import LinearGradient from 'react-native-linear-gradient';
import AddEvent from '../components/AddEvent';
// import Animated, {color} from 'react-native-reanimated';

// <FontAwesome name="lock" color="#05375a" size={20} />

const EventScreen = props => {
  const [data, setData] = useState({
    eventName: '!',
    eventDescription: '',
    eventDate: '',
    eventLocation: '',
  });

  const handleEventName = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        eventName: val,
      });
    }
  };

  const handleEventDescription = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        eventDescription: val,
      });
    }
  };

  const handleEventDate = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        eventDate: val,
      });
    }
  };

  const handleEventLocation = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        eventLocation: val,
      });
    }
  };

  const [animation, setAnimation] = useState(new Animated.Value(0));
  const {height} = Dimensions.get('window');
  const openModal = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const saveModal = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: 'clamp',
  });
  const modalTrigger = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const add = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };
  const open = {
    transform: [{scale: openModal}, {translateY: saveModal}],
  };
  const background = {
    backgroundColor: Colors.yellow,
  };
  const [eventsArray, setEventArray] = useState([]);
  const addEvent = () => {
    // console.log('here ' + data.eventName);
    setEventArray([...eventsArray, data.eventName]);
    // ...events,
    // {
    //   eventName: '',
    //   eventDescription: '',
    //   eventDate: '',
    //   eventLocation: '',
    // },
    // [data.eventName],
    // [data.eventDescription],
    // [data.eventDate],
    // [data.eventLocation],

    setData(null);
    console.log('This is event ' + eventsArray);
  };
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', bottom: 10}}>
        <TouchableOpacity onPress={modalTrigger}>
          <View style={{alignItems: 'flex-start'}}>
            <MaterialIcons
              name="add-circle"
              size={60}
              color={Colors.darkBlue}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.background, open]}>
        <View style={styles.wrap}>
          <Text style={{fontSize: 25, color: Colors.white}}>Enter Event!</Text>
          <Text style={{fontSize: 15, color: Colors.white, marginTop: 5}}>
            Event Name
          </Text>
          <TextInput
            style={{color: Colors.white}}
            placeholder="Enter name"
            onChangeText={val => handleEventName(val)}
          />
          <Text style={{fontSize: 15, color: Colors.white, marginTop: 5}}>
            Event Description
          </Text>
          <TextInput
            style={{color: Colors.white}}
            placeholder="Enter description"
            onChangeText={val => handleEventDescription(val)}
          />
          <Text style={{fontSize: 15, color: Colors.white, marginTop: 5}}>
            Event Date
          </Text>
          <TextInput
            style={{color: Colors.white}}
            placeholder="4/26/2022"
            onChangeText={val => handleEventDate(val)}
          />
          <Text style={{fontSize: 15, color: Colors.white, marginTop: 5}}>
            Event Location
          </Text>
          <TextInput
            style={{color: Colors.white}}
            placeholder="Enter location"
            onChangeText={val => handleEventLocation(val)}
          />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginLeft: 15}}>
              <TouchableOpacity onPress={close}>
                <LinearGradient colors={[Colors.yellow, Colors.metallicBlue]}>
                  <Text style={{color: Colors.white, padding: 5}}>Close</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 20}}>
              <TouchableOpacity onPress={() => addEvent()}>
                <LinearGradient colors={[Colors.yellow, Colors.metallicBlue]}>
                  <Text style={{color: Colors.white, padding: 5}}>
                    Add to list
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
      <View>
        {eventsArray.map((item, index) => {
          <AddEvent key={index} eventName={item} />;
        })}
      </View>
      <Text>This is event {data.eventName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    padding: 20,
    margin: 20,
    backgroundColor: Colors.blue,
    shadowOffset: {
      width: 8.4,
      height: 8.4,
    },
    shadowOpacity: 0.74,
    textShadowRadius: 30,
    elevation: 10,
    borderRadius: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EventScreen;
