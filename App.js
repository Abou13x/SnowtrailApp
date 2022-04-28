import React, {useEffect} from 'react';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  ActivityIndicator,
} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {View, Button, StatusBar} from 'react-native';
import Colors from './shared/Colors';
import AboutScreen from './screens/AboutScreen';
import FoodDrinkScreen from './screens/FoodDrinkScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import SupportScreen from './screens/SupportScreen';
import WeatherScreen from './screens/WeatherScreen';
import TrailMapScreen from './screens/TrailMapScreen';
import {DrawerContent} from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';
import {AuthContext} from './components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Weather from './screens/WeatherScreen';

const ProfileStack = createStackNavigator();
const AboutStack = createStackNavigator();
const FoodDrinkStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SupportStack = createStackNavigator();
const WeatherStack = createStackNavigator();
const TrailMapStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async foundUser => {
        const userToken = String(foundUser[0].userToken); //set this to userName to allow login without credentials
        const userName = foundUser[0].username;
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }

        console.log('userToken: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        //to be implemented
      },
    }),
    [],
  );
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      console.log('userToken', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.metallicBlue}
        />
        {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
              headerShown: false,
            }}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen
              name="ProfileScreen"
              component={ProfileStackScreen}
            />
            <Drawer.Screen
              name="TrailMapScreen"
              component={TrailMapStackScreen}
            />
            <Drawer.Screen
              name="FoodDrinkScreen"
              component={FoodDrinkStackScreen}
            />
            <Drawer.Screen
              name="WeatherScreen"
              component={WeatherStackScreen}
            />
            <Drawer.Screen
              name="SettingScreen"
              component={SettingsStackScreen}
            />
            <Drawer.Screen
              name="SupportScreen"
              component={SupportStackScreen}
            />
            <Drawer.Screen name="AboutScreen" component={AboutStackScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);
const TrailMapStackScreen = ({navigation}) => (
  <TrailMapStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <TrailMapStack.Screen
      name="Trail Map"
      component={TrailMapScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </TrailMapStack.Navigator>
);
const FoodDrinkStackScreen = ({navigation}) => (
  <FoodDrinkStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <FoodDrinkStack.Screen
      name="Food & Drinks"
      component={TrailMapScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </FoodDrinkStack.Navigator>
);
const WeatherStackScreen = ({navigation}) => (
  <WeatherStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <WeatherStack.Screen
      name="Weather"
      component={Weather} //WeatherScreen
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </WeatherStack.Navigator>
);
const SettingsStackScreen = ({navigation}) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <SettingsStack.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </SettingsStack.Navigator>
);
const SupportStackScreen = ({navigation}) => (
  <SupportStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <SettingsStack.Screen
      name="Support"
      component={SupportScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </SupportStack.Navigator>
);
const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <AboutStack.Screen
      name="About"
      component={AboutScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </AboutStack.Navigator>
);
export default App;
