import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {List} from 'react-native-paper';

import {ListIconProps, ItemProps, DataItem} from './../../@types';
import {Colors} from './../../constants';
import styles from './styles';

import mockedData from './../../mocks/mockData';

const ListIcon: React.FC<ListIconProps> = ({icon}) => (
  <List.Icon color={Colors.primary} icon={icon} />
);

const Item: React.FC<ItemProps> = ({title, renderLeft}) => (
  <List.Item title={title} left={renderLeft} />
);

const DictionaryScreen: React.FC = () => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));

        setData(mockedData);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderLeft = (props: any) => <ListIcon {...props} icon="star" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Item title={item.name} renderLeft={renderLeft} />
        )}
      />
    </View>
  );
};

export default DictionaryScreen;
