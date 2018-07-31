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
    AuthLanding: AuthLanding,
    SignIn: Login,
    Registration: Registration,
  },
  {
    initialRouteName: 'AuthLanding',
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
  }
);
