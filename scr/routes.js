import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerActions,
} from 'react-navigation';

import LeftDrawer from './Components/LeftDrawer';
import RightDrawer from './Components/RightDrawer';
import BottomTabBar from './Components/BottomTabBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Profile2 from './pages/Profile2';
import Settings from './pages/Settings';
import InputTest from './pages/InputTest';
import About from './pages/About';

const StackNavigator = createStackNavigator(
  {
    Home,
    Profile,
    Profile2,
    Settings,
    InputTest,
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

// StackNavigator.navigationOptions = ({navigation}) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//   };
// };

const AboutStack = createStackNavigator({
  About,
});

const BottomNavigator = createBottomTabNavigator(
  {
    StackNavigator,
    AboutStack,
  },
  {
    tabBarComponent: BottomTabBar,
  },
);

const LeftDrawerNavigator = createDrawerNavigator(
  {
    BottomNavigator,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    drawerPosition: 'left',
    overlayColor: '#6b52ae',
    contentComponent: LeftDrawer,
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

const RightDrawerNavigator = createDrawerNavigator(
  {
    LeftDrawerNavigator,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    drawerPosition: 'right',
    overlayColor: '#6b52ae',
    contentComponent: RightDrawer,
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

export default createAppContainer(RightDrawerNavigator);
