import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList127577Navigator from '../features/NotificationList127577/navigator';
import Settings127576Navigator from '../features/Settings127576/navigator';
import Settings127568Navigator from '../features/Settings127568/navigator';
import UserProfile127566Navigator from '../features/UserProfile127566/navigator';
import BlankScreen0127544Navigator from '../features/BlankScreen0127544/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList127577: { screen: NotificationList127577Navigator },
Settings127576: { screen: Settings127576Navigator },
Settings127568: { screen: Settings127568Navigator },
UserProfile127566: { screen: UserProfile127566Navigator },
BlankScreen0127544: { screen: BlankScreen0127544Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
