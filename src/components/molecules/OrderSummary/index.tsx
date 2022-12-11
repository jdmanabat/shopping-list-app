import React from 'react';
import { Box, Chip, Paper, Typography } from '@mui/material';

export default function OrderSummary(params: {
  total: {
    quantity: number;
    price: number;
  };
}) {
  const { total } = params;
  return (
    <Box>
      <Typography variant="h6">Order summary:</Typography>

      <Box mt={2}>
        <Chip
          label={`Total Quantity: ${total.quantity}`}
          variant="outlined"
          color="secondary"
        />
      </Box>
      <Box mt={2}>
        <Chip
          label={`Total Price: $${total.price.toLocaleString()}`}
          variant="outlined"
          color="secondary"
        />
      </Box>
    </Box>
  );
}
