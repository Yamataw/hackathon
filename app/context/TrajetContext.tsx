"use client";

import {createContext, useState, useEffect, ReactNode} from "react";
import {Trajet} from "@/app/type/Trajet";

type TrajetContextType = {
    trajets: Trajet[];
}

export const TrajetContext = createContext<TrajetContextType | null>(null);

export const TrajetProvider = ({ children }: {children: ReactNode}) => {
    const [trajets, setTrajets] = useState<Trajet[]>([]);

    useEffect(() => {
        fetch("/trajet.json")
            .then((response) => response.json())
            .then((data) => setTrajets(data.trajets))
            .catch((error) => console.error("Erreur chargement JSON:", error));
    }, []);

    return (
        <TrajetContext.Provider value={{ trajets }}>
            {children}
        </TrajetContext.Provider>
    );
};
