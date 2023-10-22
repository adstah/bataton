"use client";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, Suspense, useState } from "react";
import { DISHES } from "@/mocked/constants";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useRouter } from "next/navigation";

export const PlaceOrderForm = () => {
  const [chosenDish, setChosenDish] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [pickedDate, setPickedDate] = useState<Dayjs | null>(
    dayjs(new Date().toISOString())
  );

  const handleDatePick = (date: Dayjs | null) => {
    setPickedDate(date);
  };

  const handleApply = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    // ev.preventDefault();
    console.log({ chosenDish, pickedDate: pickedDate?.toISOString() });
    router.replace("/?no-SSO=true");
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <Autocomplete
          options={DISHES}
          value={chosenDish}
          onChange={(_, v) => {
            setChosenDish(v!);
          }}
          renderInput={(params) => (
            <TextField
              component={Paper}
              onChange={({ currentTarget }) => console.log(currentTarget.value)}
              label="Dish"
              {...params}
            />
          )}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Order date"
              onChange={handleDatePick}
              value={pickedDate}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Button onClick={handleApply} variant="contained">
          Order
        </Button>
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
            <Typography>Order summary:</Typography>
            <hr />
            <Typography>
              Chosen dish <b>{chosenDish}</b>
            </Typography>
            <Typography>
              Date <b>{pickedDate?.toISOString().split("T")[0]}</b>
            </Typography>
            <Button variant="contained" onClick={handleSubmit}>
              Submit my order
            </Button>
          </Box>
        </Modal>
      </form>
    </Suspense>
  );
};

// modal na confirm
