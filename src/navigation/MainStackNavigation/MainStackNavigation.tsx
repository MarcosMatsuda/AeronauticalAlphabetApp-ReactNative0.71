import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/HomeScreen/HomeScreen';
import DetailsScreen from '@screens/DetailsScreen/DetailsScreen';

import {StackNavigatorParamList} from '@navigation/types';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

function MainStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigation;
