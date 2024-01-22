import * as React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '@navigation/types';

const DetailsScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
