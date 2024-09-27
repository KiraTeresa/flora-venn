import { Header } from "@/components/universals/header";

export default function PlantLayout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        <main className="max-w-screen-xl mb-5 md:m-auto">
            {children}
        </main>
    </>
}