import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
// import {useNavigation} from '@react-navigation/native';
// import {MainScreenNavigationProp} from '@navigation/types';

import {useNetInfo} from '@react-native-community/netinfo';

// import mockedData from './../../mocks/mockData';

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
  renderLeft: (props: any) => React.ReactNode;
}

const Item: React.FC<ItemProps> = ({title, renderLeft}) => (
  <List.Item title={title} left={renderLeft} />
);

interface DataItem {
  [key: string]: string;
}

const HomeScreen: React.FC = () => {
  const {isConnected} = useNetInfo();

  // const navigation = useNavigation<MainScreenNavigationProp>();

  const [data, setData] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    // navigation.navigate('DetailsScreen');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        // setData(mockedData);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item title={item.name} renderLeft={renderLeft} />
          )}
        />
      )}
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
