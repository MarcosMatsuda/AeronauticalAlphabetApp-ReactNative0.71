import {ComponentType} from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';

export type StackNavigationItemOptions<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> =
  | StackNavigationOptions
  | ((props: {
      navigation: any;
      route: RouteProp<ParamList, RouteName>;
    }) => StackNavigationOptions);

export type StackNavigationItem<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = {
  component: ComponentType<any>;
  options?: StackNavigationItemOptions<ParamList, RouteName>;
  route: keyof ParamList;
};
