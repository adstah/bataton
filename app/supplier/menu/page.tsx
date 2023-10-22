"use client";
import { FullWrapper } from "@/components/(shared)/full-wrapper";
import { LoginForm } from "@/components/supplier/login-form";
import { MenuAdjust } from "@/components/supplier/menu/menu-adjust";
import { SupplierNav } from "@/components/supplier/supplier-nav";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";

const Page = () => {
  return (
    <FullWrapper>
      <MenuAdjust />
    </FullWrapper>
  );
};

export default Page;
