import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddItemsDataGrid from '../AddItemsDataGrid';

import { TCartItem } from '../../../features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { addToCart } from '../../../features/cart/cartSlice';

export default function AddItemsModal() {
  const products = useAppSelector((state) => state.products.items);
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<TCartItem[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (items: TCartItem[]) => {
    setSelectedItems(items);
  };

  const handleAddItems = () => {
    selectedItems.forEach((item) => {
      dispatch(addToCart({ ...item }));
    });

    handleClose();
  };

  const handleCellEditCommit = (params: {
    id: string | number;
    value: number;
    field: string;
  }) => {
    const { field, id, value } = params;

    if (field === 'quantity') {
      const modifiedItems = selectedItems.map((item) => {
        if (item.id === id) return { ...item, quantity: value };

        return item;
      });

      setSelectedItems(modifiedItems);
    }
  };

  React.useEffect(() => {
    console.log('>>AddItemsModal//dlog::', 'selectedItems', selectedItems); //TRACE
  }, [selectedItems]);
  return (
    <>
      <Tooltip title="Open cart">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add items
          <ShoppingCartIcon />
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle id="alert-dialog-title">
          Add mutiple items to cart at once
        </DialogTitle>
        <DialogContent sx={{ overflowY: 'visible' }}>
          <AddItemsDataGrid
            products={products}
            onSelect={handleSelect}
            onCellEditCommit={handleCellEditCommit}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            variant="contained"
            disabled={selectedItems.length === 0}
            onClick={handleAddItems}
          >
            Add items
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
