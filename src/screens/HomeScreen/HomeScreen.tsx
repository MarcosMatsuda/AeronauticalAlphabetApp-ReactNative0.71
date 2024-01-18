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

const HomeScreen: React.FC = () => {
  const {isConnected} = useNetInfo();

  const [searchVal, setSearchVal] = useState<string>('');
  const [data, setData] = useState<any[] | null>(null);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const dataResults = () => {
    if (!data) {
      return [];
    }

    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchVal.toLowerCase()),
    );

    return filteredResults;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
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
          placeholder="Search"
          onChangeText={setSearchVal}
          value={'Something'}
          style={styles.searchbar}
        />
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text>Will show result.</Text>
            <View>
              {dataResults().map((item: any, index: number) => (
                <Text key={index}>{item.name}</Text>
              ))}
            </View>
          </Modal>
        </Portal>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show
        </Button>
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
