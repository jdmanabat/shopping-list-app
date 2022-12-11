import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridRenderCellParams,
  GridRowId,
  GridSelectionModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';

import { TCartItem } from '../../../features/cart/cartSlice';
import { TProduct } from '../../../features/products/productsSlice';
import { Avatar } from '@mui/material';

export default function AddItemsDataGrid(params: {
  products: TProduct[];
  onSelect: (items: TCartItem[]) => void;
  onCellEditCommit: (params: {
    id: string | number;
    value: number;
    field: string;
  }) => void;
}) {
  const { products, onSelect, onCellEditCommit } = params;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 0 },
    {
      field: 'imageSrc',
      headerName: 'Image',
      width: 100,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Avatar alt="" src={params.value} />
      ),
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      valueFormatter: (params: GridValueFormatterParams<number>) => {
        if (params.value == null) {
          return '';
        }

        return `$${params.value.toLocaleString()}`;
      },
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 110,
      editable: true,
      type: 'number',
    },
  ];

  const rows: TCartItem[] = React.useMemo(() => {
    return products.map((product) => {
      return {
        ...product,
        quantity: 1,
      };
    });
  }, [products]);

  const [updatedRows, setUpdatedRows] = React.useState<TCartItem[]>(rows);
  const handleCellEditCommit = (params: GridCellEditCommitParams) => {
    const { field, id, value } = params;

    if (field === 'quantity') {
      const modifiedRows = updatedRows.map((row) => {
        if (row.id === id) {
          return { ...row, quantity: value };
        }

        return row;
      });

      setUpdatedRows(modifiedRows);
    }

    onCellEditCommit({ id, value, field });
  };

  const handleSelectionModelChange = (ids: GridSelectionModel) => {
    const selectedIDs = new Set(ids);
    const selectedRowData = updatedRows.filter((row) =>
      selectedIDs.has(row.id.toString())
    );

    onSelect(selectedRowData);
  };

  return (
    <Box>
      <Box sx={{ height: '423px', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(ids) => handleSelectionModelChange(ids)}
          onCellEditCommit={(params) => handleCellEditCommit(params)}
          componentsProps={{
            toolbar: {
              cellMode: 'edit',
            },
          }}
        />
      </Box>
    </Box>
  );
}
