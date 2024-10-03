import { createSelector } from 'reselect';
import { RootState } from './store';

const selectProducts = (state: RootState) => state.productsData.products;

export const selectAllProducts = createSelector(
  [selectProducts],
  (products) => products
);



const selectCartItems = (state: RootState) => state.cartData.items;

export const selectAllCartItems = createSelector(
  [selectCartItems],
  (items) => items
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce((total, item) => total + item.quantity * item.price, 0)
);
