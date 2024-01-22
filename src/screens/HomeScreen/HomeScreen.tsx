import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Modal,
  Portal,
  Button,
  PaperProvider,
  Searchbar,
  Text,
  IconButton,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '@navigation/types';
import {useNetInfo} from '@react-native-community/netinfo';

import {Dictionary} from './../../services/types';
import {searchNames} from './../../services/utils/filtersUtils';

import mockedData from './../../mocks/mockData';

type Dictionary = {id: number; name: string}[];

const HomeScreen: React.FC = () => {
  const {isConnected} = useNetInfo();

  const [data, setData] = useState<Dictionary>([]);
  const [searchVal, setSearchVal] = useState<string>('');
  const [modalResult, setModalResult] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation<MainScreenNavigationProp>();

  const containerStyle = {backgroundColor: 'white', padding: 20};

  const showModal = () => setVisible(true);

  const hideModal = () => {
    setSearchVal('');
    setVisible(false);
  };

  const searchData = (arrayData: any, item: string) => {
    const result = searchNames(arrayData, item);
    console.log(result.length);
    setModalResult(result);
    showModal();
  };

  const searchNames = (data: any[], word: string) => {
    const filteredNames=[];
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      const target = data.filter(obj =>
        obj.name.startsWith(letter.toUpperCase()),
      );

      filteredNames.push(target);
    }

    return filteredNames;
  };

  const searchData = (arrayData: any, item: string) => {
    const result = searchNames(arrayData, item);

    console.log(result);
    showModal();
    setModalResult(result);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 0));

        setData(mockedData);
      } catch (e) {
        throw e;
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

  return (
    <View style={styles.container}>
      <PaperProvider>
        <View style={styles.containerTitle}>
          <View style={styles.titleContainer}>
            <Text variant="titleLarge" style={styles.title}>
              Do your research!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <IconButton icon="information" size={24} />
            </TouchableOpacity>
          </View>
          <Searchbar
            onChangeText={setSearchVal}
            value={searchVal}
            style={styles.searchbar}
          />
        </View>
        <Button mode="contained" onPress={() => searchData(data, searchVal)}>
          Search
        </Button>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <View>
              <Text variant="titleMedium">
                Results founded: {`${modalResult?.length}`}
              </Text>
            </View>
            <View>
              {modalResult?.map((item: any, index: number) => (
                <Text variant="titleSmall" key={index}>
                  {item?.name}
                </Text>
              ))}
            </View>
          </Modal>
        </Portal>
      </PaperProvider>
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
  containerTitle: {
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 16,
    marginVertical: 16,
  },
});

export default HomeScreen;
