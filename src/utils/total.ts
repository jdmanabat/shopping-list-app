import { TCartItem } from '../features/cart/cartSlice';

export const getTotalPriceAndQuantity = (items: TCartItem[]) => {
  let quantity = 0;
  let price = 0;
  items.forEach((item) => {
    quantity += item.quantity;
    price += item.price * item.quantity;
  });
  return { quantity, price };
};
