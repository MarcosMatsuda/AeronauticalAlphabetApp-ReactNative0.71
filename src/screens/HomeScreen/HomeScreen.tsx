import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '@navigation/types';

import {useNetInfo} from '@react-native-community/netinfo';

const data = [
  {id: '1', title: 'Item 1', description: 'Description for Item 1'},
  {id: '2', title: 'Item 2', description: 'Description for Item 2'},
  {id: '3', title: 'Item 3', description: 'Description for Item 3'},
];

const Colors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  accent: '#e74c3c',
  background: '#ecf0f1',
  text: '#2c3e50',
};

interface ListIconProps {
  icon: string;
}

const ListIcon: React.FC<ListIconProps> = ({icon}) => (
  <List.Icon color={Colors.primary} icon={icon} />
);

interface ItemProps {
  title: string;
  description: string;
  renderLeft: (props: any) => React.ReactNode;
}

const Item: React.FC<ItemProps> = ({title, description, renderLeft}) => (
  <List.Item title={title} description={description} left={renderLeft} />
);

const HomeScreen: React.FC = () => {
  const {isConnected} = useNetInfo();

  const navigation = useNavigation<MainScreenNavigationProp>();

  const handleSearch = () => {
    navigation.navigate('DetailsScreen');
  };

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Text>No Connection!</Text>
      </View>
    );
  }

  const renderLeft = (props: any) => <ListIcon {...props} icon="star" />;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={handleSearch}
        value={'Something'}
        style={styles.searchbar}
      />
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Item
            title={item.title}
            description={item.description}
            renderLeft={renderLeft}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    marginBottom: 16,
  },
});

export default HomeScreen;
