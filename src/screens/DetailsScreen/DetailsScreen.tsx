import * as React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '@navigation/types';

const DetailsScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
