import { Header } from "@/components/universals/header";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>
        <img src="/images/bg-element-mobile-1.png" alt="background design element" className="absolute -mt-5 -z-10" />
        {children}
    </>
}