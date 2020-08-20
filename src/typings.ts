export interface IMenuItem {
  name: string;
  category: string;
  itemId: number;
  imageUrl: string;
  price: number | null;
  tax: number;
  available: boolean;
  description: string;
  modifierGroups: object;
  timePeriods: Array<object>;
  [key: string]: any;
}

export interface IMenuData {
  [key: string]: IMenuItem;
}
