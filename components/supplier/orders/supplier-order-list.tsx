import { YOUR_ORDERS } from "@/mocked/constants";
import { Box, Button, MenuItem, Paper, Select, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

export const SupplierOrderList = () => {
  const router = useRouter();

  const handleSaveAndGenerate = () => {
    router.replace("/supplier?signed-in=true");
  };

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
          {
            field: "date",
            headerName: "Date",
            minWidth: 90,
            renderCell: (x) => x.value.split("T")[0],
          },
          {
            field: "setStatus",
            minWidth: 200,
            headerName: "Set status",
            renderCell: () => (
              <Select defaultValue={"ACCEPT"} style={{ width: 200 }}>
                <MenuItem value={"ACCEPT"}>ACCEPT</MenuItem>
                <MenuItem value={"REJECT"}>REJECT</MenuItem>
              </Select>
            ),
          },
        ]}
      />
      <Button onClick={handleSaveAndGenerate}>
        Save and generate summary report
      </Button>
    </Box>
  );
};
