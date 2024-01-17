/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/HomeScreen/HomeScreen';
import DetailsScreen from '@screens/DetailsScreen/DetailsScreen';
import DictionaryScreen from '@screens/DictionaryScreen/DictionaryScreen';

import {StackNavigatorParamList, BottomTabParamList} from '@navigation/types';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();
function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();
function MainStackNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="DictionaryScreen"
          component={DictionaryScreen}
          options={{
            tabBarLabel: 'Dictionary',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="book-alphabet"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigation;
