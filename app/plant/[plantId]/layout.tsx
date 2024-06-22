import { Header } from "@/components/header";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        <main className="max-w-screen-xl mb-5 md:m-auto">
            <img src="/images/bg-element-mobile-1.png" alt="background design element" className="absolute -mt-5 -z-10" />
            {children}
        </main>
    </>
}