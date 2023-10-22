import { Stack, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export const SupplierNav = () => {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Typography variant="h4" textAlign="center">
        Welcome back, Ślimak!
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button LinkComponent={Link} href="supplier/orders" variant="contained">
          Check orders
        </Button>
        <Button LinkComponent={Link} href="supplier/menu" variant="contained">
          Adjust the food menu
        </Button>
        <Button variant="contained" disabled>
          Help
        </Button>
      </Box>
    </Stack>
  );
};
