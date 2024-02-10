import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const CartItem = ({ data, onDelete }) => {
  const columns = [
    {
      field: "select",
      headerName: "Select",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      width: 80,
      editable: false,
    },
    {
      field: "photo",
      headerName: "Image",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      width: 100,
      renderCell: (params) => {
        const rowData = params.row;
        return (
          <img
            src={`${import.meta.env.VITE_API}/uploads/${rowData.photo}`}
            alt={rowData.name}
            className="rounded-full w-16 h-16 object-cover"
          />
        );
      },
      editable: false,
    },
    {
      field: "name",
      headerName: "ProductName",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      headerBorder: "green",
      width: 150,
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      width: 80,
      editable: false,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      width: 80,
      editable: true,
    },
    {
      field: "delete",
      headerName: "Remove",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      width: 80,
      editable: false,
      renderCell: (params) => (
        <button
          onClick={() => onDelete(params.row.id)} // Assuming there's an id field in your data
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 100 } } }}
          disableRowSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default CartItem;
