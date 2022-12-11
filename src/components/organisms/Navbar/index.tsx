import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Tooltip,
} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useAppSelector } from '../../../app/hooks';
import ShoppingList from '../ShoppingList';

export default function Navbar() {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <LocalMallIcon />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Tooltip title="Open cart">
                <Button variant="contained" color="primary">
                  Add items
                  <ShoppingCartIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Open cart">
                <ShoppingList />
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
