"use client";
import { DISHES } from "@/mocked/constants";
import { Autocomplete, TextField, Paper, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push("?signed-in=true");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <TextField
        component={Paper}
        onChange={({ target }) => {
          setUser({ ...user, username: target.value });
        }}
        label="Username"
      />
      <TextField
        component={Paper}
        type="password"
        onChange={({ target }) => {
          setUser({ ...user, password: target.value });
        }}
        label="Password"
      />
      <Button type="submit" variant="contained">
        Log in
      </Button>
    </form>
  );
};
