"use client";
import { YOUR_ORDERS } from "@/mocked/constants";
import {
  Box,
  Card,
  Grid,
  ListItem,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const OrderList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      padding={1}
      component={Paper}
    >
      <DataGrid
        rows={YOUR_ORDERS}
        columns={[
          { field: "dish", headerName: "" },
          { field: "date", headerName: "Date", minWidth: 150 },
          { field: "status", headerName: "Status", minWidth: 150 },
        ]}
      />
    </Box>
  );
};
