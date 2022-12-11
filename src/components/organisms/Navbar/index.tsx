import React from 'react';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingList from '../ShoppingList';
import AddItemsModal from '../AddItemsModal';

export default function Navbar() {
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
              <AddItemsModal />
              <ShoppingList />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
