import {StackNavigationItem} from './utils';

export namespace DetailsStack {
  export type ParamList = {
    DetailsScreen: undefined;
  };

  type DetailsStackItem = StackNavigationItem<ParamList, keyof ParamList>;

  export type Items = readonly DetailsStackItem[];
}
