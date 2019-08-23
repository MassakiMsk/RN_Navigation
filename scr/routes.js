import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerActions,
} from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Profile2 from './pages/Profile2';
import Settings from './pages/Settings';
import InputTest from './pages/InputTest';

const StackNavigator = createStackNavigator(
  {
    Home,
    Profile,
    Profile2,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: StackNavigator,
    Settings,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    drawerPosition: 'right',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
    getCustomActionCreators: (route, stateKey) => {
      return {
        openRightDrawer: () => DrawerActions.openDrawer({key: stateKey}),
      };
    },
  },
);

const DrawerNavigatorLeft = createDrawerNavigator(
  {
    Home: DrawerNavigator,
    InputTest,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    drawerPosition: 'left',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
    getCustomActionCreators: (route, stateKey) => {
      return {
        openLeftDrawer: () => DrawerActions.openDrawer({key: stateKey}),
      };
    },
  },
);

export default createAppContainer(DrawerNavigatorLeft);
