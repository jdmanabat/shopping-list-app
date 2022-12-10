import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';

import { decrement, increment } from '../../../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Typography component="h1"> Count is {count}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          Increment
        </Button>

        <Button variant="contained" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </Box>
    </Box>
  );
}
