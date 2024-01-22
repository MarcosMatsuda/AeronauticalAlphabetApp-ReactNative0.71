import {Dictionary} from './../types';

type List = Dictionary;

export const searchNames = (list: List, item: string): List => {
  if (!item) {
    return [];
  }

  const filteredItems = [];
  for (let i = 0; i < item.length; i++) {
    const firstItem = item[i];
    const target = list.filter(obj =>
      obj?.name.startsWith(firstItem.toUpperCase()),
    );

    target[0] ? filteredItems.push(target[0]) : null;
  }

  return filteredItems;
};
