"use client";
import { FullWrapper } from "@/components/(shared)/full-wrapper";
import { LoginForm } from "@/components/supplier/login-form";
import { SupplierNav } from "@/components/supplier/supplier-nav";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();
  return (
    <FullWrapper>
      {params.get("signed-in") !== "true" ? <LoginForm /> : <SupplierNav />}
    </FullWrapper>
  );
};

export default Page;
