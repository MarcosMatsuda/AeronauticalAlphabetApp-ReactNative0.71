export interface ListIconProps {
  icon: string;
}

export interface ItemProps {
  title: string;
  renderLeft: (props: any) => React.ReactNode;
}

export type DataItem = {
  id: number;
  name: string;
};
