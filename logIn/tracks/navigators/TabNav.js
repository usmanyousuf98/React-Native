import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

function TabNav(props) {
  return (
    <Tab.Navigator initialRouteName="TrackListScreen">
      <Tab.Screen name="TrackListScreen" component={TrackListScreen} />
      <Tab.Screen name="Track Create" component={TrackCreateScreen} />
      <Tab.Screen name="Accounts" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default TabNav;
