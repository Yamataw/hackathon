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
      <ScrollArea className="h-full py-4">
        <div className="px-2 py-1">
          <h2 className="mb-1 px-2 text-sm font-semibold tracking-tight">Navigation</h2>
          <div className="space-y-1">
            <Button
                variant={activeItem === "dashboard" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("dashboard")}
                asChild
            >
              <Link href="/">
                <Home className="mr-1 h-3.5 w-3.5" />
                Tableau de bord
              </Link>
            </Button>
            <Button
                variant={activeItem === "trips" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("trips")}
                asChild
            >
              <Link href="/mes-trajets">
                <Map className="mr-1 h-3.5 w-3.5" />
                Mes Voyages
              </Link>
            </Button>
            <Button
                variant={activeItem === "add-trip" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("add-trip")}
                asChild
            >
              <Link href="/ajouter-trajet">
                <PlusCircle className="mr-1 h-3.5 w-3.5" />
                Ajouter un Trajet
              </Link>
            </Button>
            <Button
                variant={activeItem === "schedule" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("schedule")}
            >
              <Calendar className="mr-1 h-3.5 w-3.5" />
              Calendrier
            </Button>
            <Button
                variant={activeItem === "achievements" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("achievements")}
            >
              <Award className="mr-1 h-3.5 w-3.5" />
              Récompenses
            </Button>
          </div>
        </div>
        <div className="px-2 py-1">
          <h2 className="mb-1 px-2 text-sm font-semibold tracking-tight">Bien-être</h2>
          <div className="space-y-1">
            <Button
                variant={activeItem === "focus" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("focus")}
            >
              <Lightbulb className="mr-1 h-3.5 w-3.5" />
              Mode Focus
            </Button>
            <Button
                variant={activeItem === "relaxation" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("relaxation")}
            >
              <Clock className="mr-1 h-3.5 w-3.5" />
              Espace Détente
            </Button>
            <Button
                variant={activeItem === "stats" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("stats")}
            >
              <BarChart3 className="mr-1 h-3.5 w-3.5" />
              Statistiques
            </Button>
          </div>
        </div>
        <div className="px-2 py-1">
          <h2 className="mb-1 px-2 text-sm font-semibold tracking-tight">Social</h2>
          <div className="space-y-1">
            <Button
                variant={activeItem === "team" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("team")}
            >
              <Users className="mr-1 h-3.5 w-3.5" />
              Défis d'Équipe
            </Button>
            <Button
                variant={activeItem === "settings" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start h-8 text-xs"
                onClick={() => handleItemClick("settings")}
            >
              <Settings className="mr-1 h-3.5 w-3.5" />
              Paramètres
            </Button>
          </div>
        </div>
      </ScrollArea>
  )
}

