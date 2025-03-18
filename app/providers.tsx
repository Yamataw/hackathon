"use client"; // 🔥 Obligatoire car on utilise `useContext`

import { TrajetProvider } from "@/app/context/TrajetContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return <TrajetProvider>{children}</TrajetProvider>;
}