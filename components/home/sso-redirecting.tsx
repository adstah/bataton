import { Card, CircularProgress, Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const SSORedirecting = () => {
  return (
    <Stack
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      component={Card}
    >
      <Typography variant="h3">SSO Redirecting</Typography>
      <CircularProgress />
    </Stack>
  );
};
