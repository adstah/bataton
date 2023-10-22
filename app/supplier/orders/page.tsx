"use client";
import { FullWrapper } from "@/components/(shared)/full-wrapper";
import { LoginForm } from "@/components/supplier/login-form";
import { SupplierOrderList } from "@/components/supplier/orders/supplier-order-list";
import { SupplierNav } from "@/components/supplier/supplier-nav";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";

const Page = () => {
  return (
    <FullWrapper>
      <SupplierOrderList />
    </FullWrapper>
  );
};

export default Page;
