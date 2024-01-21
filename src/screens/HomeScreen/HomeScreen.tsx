import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Modal,
  Portal,
  Button,
  PaperProvider,
  Searchbar,
} from 'react-native-paper';
import {useNetInfo} from '@react-native-community/netinfo';
import mockedData from './../../mocks/mockData';

type Dictionary = {id: number; name: string}[];

const HomeScreen: React.FC = () => {
  const {isConnected} = useNetInfo();

  const [searchVal, setSearchVal] = useState<string>('');
  const [data, setData] = useState<Dictionary>([]);
  const [visible, setVisible] = useState(false);
  const [modalResult, setModalResult] = useState<any>(null);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const dataResults = () => {
    if (!data) {
      return [];
    }

    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchVal.toUpperCase()),
    );

    return filteredResults;
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
      } finally {
        // setLoading(false);
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
        <Searchbar
          onChangeText={setSearchVal}
          value={searchVal}
          style={styles.searchbar}
        />
        <Button mode="contained" onPress={() => searchData(data, searchVal)}>
          Search
        </Button>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text>Results founded:</Text>
            <View>
              {modalResult?.map((item: any, index: number) => (
                <Text key={index}>{item.name}</Text>
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
});

export default HomeScreen;
