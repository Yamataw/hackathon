"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, ChevronLeft, Clock, Train, Car, PlusCircle, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "../components/dashboard-header"
import { DashboardNav } from "../components/dashboard-nav"
import { TripMap } from "./trip-map"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
// Ajouter l'import manquant pour Link
import Link from "next/link"

// Liste des villes avec parcs de voitures disponibles
const VILLES_VOITURES = [
  "Brest",
  "Quimper",
  "Rennes",
  "La Rochelle",
  "Le Mans",
  "Tours",
  "Angers",
  "Nantes",
  "Saint-Nazaire",
  "Bordeaux",
  "Poitiers",
  "Saint-Pierre-des-Corps",
  "Limoges",
  "Pau",
  "Angoulême",
  "Toulouse",
]

// Liste des villes principales pour les trains
const VILLES_TRAINS = [
  "Paris",
  "Lyon",
  "Marseille",
  "Lille",
  "Strasbourg",
  "Nice",
  "Montpellier",
  "Bordeaux",
  "Toulouse",
  "Nantes",
  "Rennes",
  "Grenoble",
  "Dijon",
  "Tours",
  "Angers",
  "Brest",
  "Quimper",
  "La Rochelle",
  "Le Mans",
  "Saint-Nazaire",
  "Poitiers",
  "Saint-Pierre-des-Corps",
  "Limoges",
  "Pau",
  "Angoulême",
]

// Options de trains et voitures
const OPTIONS_TRAINS = ["TGV INOUI", "TGV OUIGO", "INTERCITÉS", "TER"]
const OPTIONS_VOITURES = ["Renault Zoé", "Peugeot e-208", "Citroën ë-C4", "Fiat 500e", "Hyundai Kona Electric"]

export default function AjouterTrajet() {
  const [date, setDate] = useState<Date>()
  const [segments, setSegments] = useState([
    {
      id: 1,
      type: "train",
      from: "Paris",
      to: "Nantes",
      departTime: "09:15",
      arriveTime: "11:30",
      options: OPTIONS_TRAINS,
      selectedOption: "TGV INOUI",
    },
    {
      id: 2,
      type: "car",
      from: "Nantes",
      to: "La Rochelle",
      departTime: "12:00",
      arriveTime: "13:30",
      options: OPTIONS_VOITURES,
      selectedOption: "Renault Zoé",
    },
  ])

  const addSegment = () => {
    const lastSegment = segments[segments.length - 1]
    const newSegment = {
      id: lastSegment.id + 1,
      type: "train",
      from: lastSegment.to,
      to: "",
      departTime: "",
      arriveTime: "",
      options: OPTIONS_TRAINS,
      selectedOption: "",
    }
    setSegments([...segments, newSegment])
  }

  const removeSegment = (id: number) => {
    if (segments.length > 1) {
      setSegments(segments.filter((segment) => segment.id !== id))
    }
  }

  const updateSegment = (id: number, field: string, value: string) => {
    setSegments(
        segments.map((segment) => {
          if (segment.id === id) {
            const updatedSegment = { ...segment, [field]: value }

            // Si on change le type, mettre à jour les options
            if (field === "type") {
              updatedSegment.options = value === "train" ? OPTIONS_TRAINS : OPTIONS_VOITURES
              updatedSegment.selectedOption = value === "train" ? OPTIONS_TRAINS[0] : OPTIONS_VOITURES[0]

              // Si on passe à voiture, vérifier que la ville de départ/arrivée est dans la liste des villes avec parcs
              if (value === "car") {
                if (!VILLES_VOITURES.includes(updatedSegment.from)) {
                  updatedSegment.from = VILLES_VOITURES[0]
                }
                if (!VILLES_VOITURES.includes(updatedSegment.to)) {
                  updatedSegment.to = VILLES_VOITURES[1]
                }
              }
            }

            return updatedSegment
          }
          return segment
        }),
    )
  }

  // Filtrer les villes disponibles en fonction du type de transport
  const getVillesDisponibles = (segmentId: number, field: "from" | "to") => {
    const segment = segments.find((s) => s.id === segmentId)
    if (!segment) return []

    if (segment.type === "car") {
      return VILLES_VOITURES
    }

    return VILLES_TRAINS
  }

  return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-green-50">
        <DashboardHeader />
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-6 md:p-8 bg-background ">
            <div className="flex items-center mb-8">
              <Button variant="ghost" size="icon" className="mr-2" asChild>
                <Link href="/">
                  <ChevronLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Ajouter un Trajet</h1>
                <p className="text-muted-foreground">Planifiez votre prochain voyage multimodal</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              <div className="md:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Détails du Trajet</CardTitle>
                    <CardDescription>Configurez votre itinéraire multimodal</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="tripName">Nom du trajet</Label>
                          <Input id="tripName" placeholder="Ex: Déplacement professionnel Paris-La Rochelle" />
                        </div>
                        <div className="space-y-2">
                          <Label>Date du voyage</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP", { locale: fr }) : <span>Sélectionner une date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Segments du Trajet</h3>
                        <Button variant="outline" size="sm" onClick={addSegment}>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Ajouter un segment
                        </Button>
                      </div>

                      {segments.map((segment, index) => (
                          <Card key={segment.id} className="relative">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Badge
                                      variant="outline"
                                      className={cn("mr-2", segment.type === "train" ? "bg-blue-50" : "bg-green-50")}
                                  >
                                    {segment.type === "train" ? (
                                        <Train className="h-3 w-3 mr-1" />
                                    ) : (
                                        <Car className="h-3 w-3 mr-1" />
                                    )}
                                    {segment.type === "train" ? "Train" : "Voiture"}
                                  </Badge>
                                  <CardTitle className="text-base">Segment {index + 1}</CardTitle>
                                </div>
                                {segments.length > 1 && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-7 w-7 absolute top-3 right-3"
                                        onClick={() => removeSegment(segment.id)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                )}
                              </div>
                            </CardHeader>
                            <CardContent className="pb-4 space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label>Type de transport</Label>
                                  <RadioGroup
                                      value={segment.type}
                                      onValueChange={(value) => updateSegment(segment.id, "type", value)}
                                      className="flex space-x-4"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="train" id={`train-${segment.id}`} />
                                      <Label htmlFor={`train-${segment.id}`} className="flex items-center">
                                        <Train className="h-4 w-4 mr-1" /> Train
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="car" id={`car-${segment.id}`} />
                                      <Label htmlFor={`car-${segment.id}`} className="flex items-center">
                                        <Car className="h-4 w-4 mr-1" /> Voiture
                                      </Label>
                                    </div>
                                  </RadioGroup>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`from-${segment.id}`}>Départ</Label>
                                  <Select
                                      value={segment.from}
                                      onValueChange={(value) => updateSegment(segment.id, "from", value)}
                                  >
                                    <SelectTrigger id={`from-${segment.id}`}>
                                      <SelectValue placeholder="Ville de départ" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {getVillesDisponibles(segment.id, "from").map((ville) => (
                                          <SelectItem key={ville} value={ville}>
                                            {ville}
                                          </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`to-${segment.id}`}>Arrivée</Label>
                                  <Select
                                      value={segment.to}
                                      onValueChange={(value) => updateSegment(segment.id, "to", value)}
                                  >
                                    <SelectTrigger id={`to-${segment.id}`}>
                                      <SelectValue placeholder="Ville d'arrivée" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {getVillesDisponibles(segment.id, "to").map((ville) => (
                                          <SelectItem key={ville} value={ville}>
                                            {ville}
                                          </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`depart-${segment.id}`}>Heure de départ</Label>
                                  <div className="flex">
                                    <Input
                                        id={`depart-${segment.id}`}
                                        value={segment.departTime}
                                        onChange={(e) => updateSegment(segment.id, "departTime", e.target.value)}
                                        placeholder="HH:MM"
                                        className="rounded-r-none"
                                    />
                                    <Button variant="outline" size="icon" className="rounded-l-none">
                                      <Clock className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`arrive-${segment.id}`}>Heure d'arrivée</Label>
                                  <div className="flex">
                                    <Input
                                        id={`arrive-${segment.id}`}
                                        value={segment.arriveTime}
                                        onChange={(e) => updateSegment(segment.id, "arriveTime", e.target.value)}
                                        placeholder="HH:MM"
                                        className="rounded-r-none"
                                    />
                                    <Button variant="outline" size="icon" className="rounded-l-none">
                                      <Clock className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`option-${segment.id}`}>
                                  {segment.type === "train" ? "Train" : "Véhicule"}
                                </Label>
                                <Select
                                    value={segment.selectedOption}
                                    onValueChange={(value) => updateSegment(segment.id, "selectedOption", value)}
                                >
                                  <SelectTrigger id={`option-${segment.id}`}>
                                    <SelectValue
                                        placeholder={
                                          segment.type === "train" ? "Sélectionner un train" : "Sélectionner un véhicule"
                                        }
                                    />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {segment.options.map((option) => (
                                        <SelectItem key={option} value={option}>
                                          {option}
                                        </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </CardContent>
                          </Card>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch id="eco-mode" defaultChecked />
                      <Label htmlFor="eco-mode">Privilégier les options écologiques</Label>
                    </div>
                    <Button>Enregistrer le trajet</Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="md:col-span-2 space-y-6">
                <Card className="h-[500px] overflow-hidden">
                  <CardHeader>
                    <CardTitle>Carte du Trajet</CardTitle>
                    <CardDescription>Visualisez votre itinéraire</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 h-[400px]">
                    <TripMap segments={segments} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Résumé du Trajet</CardTitle>
                    <CardDescription>Informations sur votre voyage</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium">Distance totale</p>
                        <p className="text-2xl font-bold">463 km</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Durée totale</p>
                        <p className="text-2xl font-bold">4h15</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">CO₂ estimé</p>
                        <p className="text-2xl font-bold">12,4 kg</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">XP potentiels</p>
                      <div className="flex items-center mt-1">
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium">+85 XP</div>
                        <p className="text-xs text-muted-foreground ml-2">
                          +25 XP trajet multimodal, +60 XP option écologique
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
  )
}

