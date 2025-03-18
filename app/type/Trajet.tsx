import { Segment } from "./Segment"

export type Trajet = {
    id: number,
    nom: string,
    date: string,
    segments: Segment[],
    distance: number,
    duree: string,
    co2: string,
    xp: number,
    status: boolean
}