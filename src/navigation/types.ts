import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
  Home: undefined;
  Details: undefined;
  Dictionary: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Dictionary: undefined;
};

export type MainScreenNavigationProp =
  NativeStackNavigationProp<StackNavigatorParamList>;
