import { Stack } from "@mui/material";

interface FullWrapperI {
  children: React.ReactElement;
}

export const FullWrapper = ({ children }: FullWrapperI) => {
  return (
    <Stack
      minWidth="100vw"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {children}
    </Stack>
  );
};
