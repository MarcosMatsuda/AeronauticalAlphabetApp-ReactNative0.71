import {DetailsStack} from './details-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends DetailsStack.ParamList {}

    type Route = keyof RootParamList;
  }
}
