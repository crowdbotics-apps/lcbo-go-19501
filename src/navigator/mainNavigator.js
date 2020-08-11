import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList89641Navigator from '../features/NotificationList89641/navigator';
import Settings89640Navigator from '../features/Settings89640/navigator';
import Settings89632Navigator from '../features/Settings89632/navigator';
import UserProfile89630Navigator from '../features/UserProfile89630/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList89641: { screen: NotificationList89641Navigator },
Settings89640: { screen: Settings89640Navigator },
Settings89632: { screen: Settings89632Navigator },
UserProfile89630: { screen: UserProfile89630Navigator },

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
