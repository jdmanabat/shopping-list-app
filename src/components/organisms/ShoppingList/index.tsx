import * as React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import ExpandIcon from '@mui/icons-material/Expand';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '../../../features/cart/cartSlice';
import OrderSummary from '../../molecules/OrderSummary';
import { getTotalPriceAndQuantity } from '../../../utils/total';

export default function ShoppingList() {
  const [open, setOpen] = React.useState(false);

  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const totals = getTotalPriceAndQuantity(items);

  return (
    <Box>
      <Tooltip title="Open cart">
        <Button
          variant="contained"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          Shopping list
          <Badge badgeContent={totals.quantity} color="success">
            <ShoppingBagIcon />
          </Badge>
        </Button>
      </Tooltip>
      <Drawer anchor="bottom" open={open} onClose={handleDrawerClose}>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Button variant="outlined" onClick={handleDrawerClose}>
            <ExpandIcon />
            <Typography>Hide shopping list</Typography>
          </Button>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr));',
              gap: 3,
            }}
          >
            <Box>
              <List>
                {items.map((item) => (
                  <ListItem alignItems="flex-start" key={item.id}>
                    <ListItemAvatar>
                      <Avatar alt={item.title} src={item.imageSrc} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={
                        <>
                          <Chip
                            label={`Quantity: ${item.quantity}`}
                            variant="outlined"
                          />
                          <IconButton
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            <AddIcon color="primary" />
                          </IconButton>
                          <IconButton
                            disabled={item.quantity === 1}
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <DeleteOutlineOutlinedIcon color="warning" />
                          </IconButton>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              {items.length === 0 && (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography>No items in the shopping list</Typography>
                </Box>
              )}
            </Box>
            <OrderSummary total={totals} />
          </Box>
        </Container>
      </Drawer>
    </Box>
  );
}
