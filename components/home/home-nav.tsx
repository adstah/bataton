import { Stack, Button, Typography, Box } from "@mui/material";
import Link from "next/link";
import React from "react";

export const HomeNav = () => {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Typography variant="h4" textAlign="center">
        Welcome back, user!
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button LinkComponent={Link} href="place-order" variant="contained">
          Place an order
        </Button>
        <Button LinkComponent={Link} href="orders" variant="contained">
          Your orders
        </Button>
        <Button variant="contained" disabled>
          Account Settings
        </Button>
      </Box>
    </Stack>
  );
};
