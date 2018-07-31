import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import {
  LoadingScreen,
  AuthLanding,
  Login,
  LoggedIn,
  Registration,
} from 'app/src/screens';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
  Home: LoggedIn,
  // Other: OtherScreen
});

const AuthStack = createStackNavigator(
  {
    AuthLanding: {
      screen: AuthLanding,
    },
    SignIn: {
      screen: Login,
      navigationOptions: {
        title: 'Login'
      },
    },
    Registration: {
      screen: Registration,
      navigationOptions: {
        title: 'Register'
      },
    },
  },
  {
    initialRouteName: 'AuthLanding',
    navigationOptions: {
      headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: 'rgb(118, 184, 121)',
      },
      headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },
  }
);

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  },

);
