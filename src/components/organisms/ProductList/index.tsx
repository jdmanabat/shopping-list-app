import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import ProductCard from '../../molecules/ProductCard';
import { TProduct } from '../../../features/products/productsSlice';

export default function ProductList(params: { products: TProduct[] }) {
  const { products } = params;
  if (!products || products.length === 0) {
    return (
      <Box>
        <Typography>No products available</Typography>
      </Box>
    );
  }
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item xs={4}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
