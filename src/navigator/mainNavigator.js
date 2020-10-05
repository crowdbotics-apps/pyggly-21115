import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen66128575Navigator from '../features/BlankScreen66128575/navigator';
import SignIn42127681Navigator from '../features/SignIn42127681/navigator';
import UserProfile127606Navigator from '../features/UserProfile127606/navigator';
import Tutorial127605Navigator from '../features/Tutorial127605/navigator';
import NotificationList127577Navigator from '../features/NotificationList127577/navigator';
import Settings127576Navigator from '../features/Settings127576/navigator';
import Settings127568Navigator from '../features/Settings127568/navigator';
import UserProfile127566Navigator from '../features/UserProfile127566/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen66128575: { screen: BlankScreen66128575Navigator },
SignIn42127681: { screen: SignIn42127681Navigator },
UserProfile127606: { screen: UserProfile127606Navigator },
Tutorial127605: { screen: Tutorial127605Navigator },
NotificationList127577: { screen: NotificationList127577Navigator },
Settings127576: { screen: Settings127576Navigator },
Settings127568: { screen: Settings127568Navigator },
UserProfile127566: { screen: UserProfile127566Navigator },

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
