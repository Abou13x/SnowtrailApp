import React, {Component} from 'react';
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

class Events extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 15,
          borderWidth: 0.4,
          borderColor: Colors.darkBlue,
        }}>
        <View style={{flex: 2}}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
          <Text>{this.props.eventDescription}</Text>
        </View>
      </View>
    );
  }
}
export default Events;
