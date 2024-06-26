import { Header } from "@/components/universals/header";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        {children}
    </>
}