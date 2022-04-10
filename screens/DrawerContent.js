import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutScreen from './AboutScreen';
import FoodDrinkScreen from './FoodDrinkScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import SupportScreen from './SupportScreen';
import Weather from './WeatherScreen';
import TrailMapScreen from './TrailMapScreen';
import HomeScreen from './HomeScreen';
import TicketScreen from './TicketScreen';
import RentalScreen from './RentalScreen';
import EventScreen from './EventScreen';
import StoreScreen from './StoreScreen';
import Colors from '../shared/Colors';
import {AuthContext} from '../components/Context';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const {signOut} = React.useContext(AuthContext);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: Colors.metallicBlue}}>
        <View style={styles.drawerContent}>
          <View>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={{
                    uri: 'https://cdn.vox-cdn.com/thumbor/Xz7gzpF_etiexg4KQlygC7U_rK0=/0x0:355x286/1200x800/filters:focal(150x239:206x295)/cdn.vox-cdn.com/uploads/chorus_image/image/65394742/image_handler.0.jpg',
                  }}
                  size={70}
                />
                <View style={{flexDirection: 'column', marginLeft: 15}}>
                  <Title style={styles.title}>User name</Title>
                  <Caption style={styles.caption}>@userid</Caption>
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Paragraph style={styles.paragraph}>
                  Club membership: Snowboarding
                </Paragraph>
              </View>
            </View>
          </View>
          <View style={{backgroundColor: Colors.white}}>
            <Drawer.Section>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {
                  props.navigation.navigate('ProfileScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons
                    name="trail-sign-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Trail"
                onPress={() => {
                  props.navigation.navigate('TrailMapScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons
                    name="ios-fast-food-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Food & Drink"
                onPress={() => {
                  props.navigation.navigate('FoodDrinkScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="weather-snowy" color={color} size={size} />
                )}
                label="Weather"
                onPress={() => {
                  props.navigation.navigate('WeatherScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons name="settings-outline" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {
                  props.navigation.navigate('SettingScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Support"
                onPress={() => {
                  props.navigation.navigate('SupportScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons name="create-outline" color={color} size={size} />
                )}
                label="About"
                onPress={() => {
                  props.navigation.navigate('AboutScreen');
                }}
              />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          //to do
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: Colors.white,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: Colors.white,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    color: Colors.white,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
