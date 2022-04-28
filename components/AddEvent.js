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

class AddEvent extends Component {
  render() {
    return (
      <View>
        <Text>Event name is {this.props.eventName}</Text>
      </View>
    );
  }
}
export default AddEvent;
