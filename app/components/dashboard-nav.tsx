"use client"

import { Award, BarChart3, Calendar, Clock, Home, Lightbulb, Map, Settings, Users, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
      <div className="w-[60px] border-r bg-background/80 backdrop-blur-sm flex flex-col items-center">
        <ScrollArea className="h-full w-full">
          <TooltipProvider delayDuration={0}>
            <div className="flex flex-col items-center py-4 space-y-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "dashboard" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("dashboard")}
                      asChild
                  >
                    <Link href="/">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Tableau de bord</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tableau de bord</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "trips" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("trips")}
                      asChild
                  >
                    <Link href="/mes-trajets">
                      <Map className="h-4 w-4" />
                      <span className="sr-only">Mes Voyages</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Mes Voyages</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "add-trip" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("add-trip")}
                      asChild
                  >
                    <Link href="/ajouter-trajet">
                      <PlusCircle className="h-4 w-4" />
                      <span className="sr-only">Ajouter un Trajet</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Ajouter un Trajet</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "schedule" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("schedule")}
                  >
                    <Calendar className="h-4 w-4" />
                    <span className="sr-only">Calendrier</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Calendrier</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "achievements" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("achievements")}
                  >
                    <Award className="h-4 w-4" />
                    <span className="sr-only">Récompenses</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Récompenses</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "focus" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("focus")}
                  >
                    <Lightbulb className="h-4 w-4" />
                    <span className="sr-only">Mode Focus</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Mode Focus</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "relaxation" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("relaxation")}
                  >
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Espace Détente</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Espace Détente</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "stats" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("stats")}
                  >
                    <BarChart3 className="h-4 w-4" />
                    <span className="sr-only">Statistiques</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Statistiques</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "team" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("team")}
                  >
                    <Users className="h-4 w-4" />
                    <span className="sr-only">Défis d'Équipe</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Défis d'Équipe</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={activeItem === "settings" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleItemClick("settings")}
                  >
                    <Settings className="h-4 w-4" />
                    <span className="sr-only">Paramètres</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Paramètres</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ScrollArea>
      </div>
  )
}

