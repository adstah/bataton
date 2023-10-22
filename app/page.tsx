"use client";
import { HomeNav } from "@/components/home/home-nav";
import { SSORedirecting } from "@/components/home/sso-redirecting";
import { Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();

  const [isVerified, setIsVerified] = useState(
    searchParams.get("no-SSO") === "true"
  );
  useEffect(() => {
    setTimeout(() => {
      setIsVerified(true);
    }, 3 * 1000);
  }, [isVerified]);
  return <main>{!isVerified ? <SSORedirecting /> : <HomeNav />}</main>;
}
