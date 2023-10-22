import { FullWrapper } from "@/components/(shared)/full-wrapper";
import { PlaceOrderForm } from "@/components/home/place-order/place-order-form";
import { Stack } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <FullWrapper>
      <PlaceOrderForm />
    </FullWrapper>
  );
};

export default Page;
