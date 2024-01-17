import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
  HomeScreen: undefined;
  DetailsScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  DictionaryScreen: undefined;
};

export type MainScreenNavigationProp =
  NativeStackNavigationProp<StackNavigatorParamList>;
