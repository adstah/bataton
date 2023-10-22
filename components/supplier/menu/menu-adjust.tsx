import { DISHES, DISHES_FULL } from "@/mocked/constants";
import {
  Box,
  Button,
  Modal,
  ToggleButton,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

export const MenuAdjust = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleOpenEdit = (dishName: string) => () => {
    setIsOpen(true);
    setSelectedDish(dishName);
  };

  const handleApplyEdit = () => {
    setIsOpen(false);
  };

  return (
    <Box component={Paper}>
      <DataGrid
        rows={DISHES_FULL}
        columns={[
          { field: "dish", headerName: "Dish" },

          {
            field: "availiable",
            minWidth: 200,
            headerName: "Availiable",
          },
          {
            field: "xd",
            headerName: "",
            renderCell: (p) => (
              <Button onClick={handleOpenEdit(p.row.dish)}>EDIT</Button>
            ),
          },
        ]}
      />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90vw",
            width: 400,
            padding: 12,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            background: "white",
            borderRadius: "8px",
          }}
        >
          <Typography>
            Chosen dish <b>{selectedDish}</b>
          </Typography>
          <Stack flexDirection="row" alignItems="center" gap={2} margin={2}>
            <Typography>Is avaliable</Typography>
            <ToggleButton
              value="check"
              selected={isAvailable}
              onChange={() => {
                setIsAvailable((prv) => !prv);
              }}
            >
              <CheckIcon />
            </ToggleButton>
          </Stack>
          <Button variant="contained" onClick={handleApplyEdit}>
            Apply edit
          </Button>
        </Box>
      </Modal>
      <Button variant="contained" style={{ margin: 8 }}>
        Add new
      </Button>
    </Box>
  );
};
