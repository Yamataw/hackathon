"use client"

import { Award, BarChart3, Calendar, Clock, Home, Lightbulb, Map, Settings, Users, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NavProps {
  setIsOpen?: (open: boolean) => void
}

export function DashboardNav({ setIsOpen }: NavProps) {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
      <div className="w-[60px] bg-primary backdrop-blur-sm flex flex-col items-center">
        <ScrollArea className="h-full w-full">
          <TooltipProvider delayDuration={0}>
            <div className="flex flex-col items-center py-4 space-y-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={isActive("/") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
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
                      variant={isActive("/mes-trajets") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
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
                      variant={isActive("/ajouter-trajet") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
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
                      variant={isActive("/calendrier") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      asChild
                  >
                    <Link href="/calendrier">
                      <Calendar className="h-4 w-4" />
                      <span className="sr-only">Calendrier</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Calendrier</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={isActive("/recompenses") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      asChild
                  >
                    <Link href="/recompenses">
                      <Award className="h-4 w-4" />
                      <span className="sr-only">Récompenses</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Récompenses</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={isActive("/focus") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      asChild
                  >
                    <Link href="/focus">
                      <Lightbulb className="h-4 w-4" />
                      <span className="sr-only">Mode Focus</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Mode Focus</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={isActive("/detente") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      asChild
                  >
                    <Link href="/detente">
                      <Clock className="h-4 w-4" />
                      <span className="sr-only">Espace Détente</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Espace Détente</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={isActive("/statistiques") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      asChild
                  >
                    <Link href="/statistiques">
                      <BarChart3 className="h-4 w-4" />
                      <span className="sr-only">Statistiques</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Statistiques</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={isActive("/defis") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      asChild
                  >
                    <Link href="/defis">
                      <Users className="h-4 w-4" />
                      <span className="sr-only">Défis d'Équipe</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Défis d'Équipe</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                      variant={isActive("/parametres") ? "accent" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      asChild
                  >
                    <Link href="/parametres">
                      <Settings className="h-4 w-4" />
                      <span className="sr-only">Paramètres</span>
                    </Link>
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
