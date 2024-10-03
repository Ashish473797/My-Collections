import { createSelector } from 'reselect';
import { RootState } from './store';

const selectCartItems = (state: RootState) => state.cartData.items;

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce((total, item) => total + item.quantity * item.price, 0)
);
