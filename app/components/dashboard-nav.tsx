"use client"

import { Award, BarChart3, Calendar, Clock, Home, Lightbulb, Map, Settings, Users, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import Link from "next/link"

interface NavProps {
  setIsOpen?: (open: boolean) => void
}

export function DashboardNav({ setIsOpen }: NavProps) {
  const [activeItem, setActiveItem] = useState("dashboard")

  const handleItemClick = (item: string) => {
    setActiveItem(item)
    if (setIsOpen) {
      setIsOpen(false)
    }
  }

  return (
    <ScrollArea className="h-full py-6">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Navigation</h2>
        <div className="space-y-1">
          <Button
            variant={activeItem === "dashboard" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("dashboard")}
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Tableau de bord
            </Link>
          </Button>
          <Button
            variant={activeItem === "trips" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("trips")}
            asChild
          >
            <Link href="/mes-trajets">
              <Map className="mr-2 h-4 w-4" />
              Mes Voyages
            </Link>
          </Button>
          <Button
            variant={activeItem === "add-trip" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("add-trip")}
            asChild
          >
            <Link href="/ajouter-trajet">
              <PlusCircle className="mr-2 h-4 w-4" />
              Ajouter un Trajet
            </Link>
          </Button>
          <Button
            variant={activeItem === "schedule" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("schedule")}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Calendrier
          </Button>
          <Button
            variant={activeItem === "achievements" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("achievements")}
          >
            <Award className="mr-2 h-4 w-4" />
            Récompenses
          </Button>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Bien-être</h2>
        <div className="space-y-1">
          <Button
            variant={activeItem === "focus" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("focus")}
          >
            <Lightbulb className="mr-2 h-4 w-4" />
            Mode Focus
          </Button>
          <Button
            variant={activeItem === "relaxation" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("relaxation")}
          >
            <Clock className="mr-2 h-4 w-4" />
            Espace Détente
          </Button>
          <Button
            variant={activeItem === "stats" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("stats")}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Statistiques Bien-être
          </Button>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Social</h2>
        <div className="space-y-1">
          <Button
            variant={activeItem === "team" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("team")}
          >
            <Users className="mr-2 h-4 w-4" />
            Défis d'Équipe
          </Button>
          <Button
            variant={activeItem === "settings" ? "secondary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleItemClick("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Paramètres
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}

