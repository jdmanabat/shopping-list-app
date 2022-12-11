import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// Define a type for the slice state
export type TProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  imageSrc: string;
};

export type TProductList = {
  items: TProduct[];
};

// Define the initial state using that type
const initialState: TProductList = {
  items: [
    {
      id: '1',
      title: 'Amazon Echo',
      price: 99,
      description: 'Smart speaker with Alexa',
      imageSrc:
        'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
    },
    {
      id: '2',
      title: 'The Lean Startup',
      price: 178,
      description:
        'How Constant Innovation Create Radically Successful Businesses Paperback',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_B01,204,203,200_.jpg',
    },
    {
      id: '3',
      title: 'Fitbit',
      price: 199,
      description: 'Looks like and old tech',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
    },
    {
      id: '4',
      title: 'Apple iPad Pro 4th Gen',
      price: 698,
      description:
        'Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Siver (4th Generation)',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
    },
    {
      id: '5',
      title: 'Kenwood kMix Stand Miser',
      price: 248,
      description:
        'For Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk',
      imageSrc:
        'https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg',
    },
    {
      id: '6',
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 1299,
      description: 'Super Ultra Wide Dual QHD 5120 x 1440',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.products.items;
export default productsSlice.reducer;
