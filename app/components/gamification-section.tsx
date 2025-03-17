import { Award, Trophy, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function GamificationSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            XP & Progression
          </CardTitle>
          <CardDescription>Suivez votre progression d'optimisation de voyage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">Niveau 12</span>
              <span className="text-sm text-muted-foreground">3 450 / 5 000 XP</span>
            </div>
            <Progress value={69} className="h-2" />
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">XP Récemment Gagnés</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-md bg-blue-50 p-2">
                <span className="text-sm">Sélection d'itinéraire écologique</span>
                <Badge variant="secondary">+45 XP</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md bg-blue-50 p-2">
                <span className="text-sm">Voyage multimodal complété</span>
                <Badge variant="secondary">+75 XP</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md bg-blue-50 p-2">
                <span className="text-sm">Série d'arrivées à l'heure (5 jours)</span>
                <Badge variant="secondary">+100 XP</Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Voir Toute la Progression
          </Button>
        </CardFooter>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            Badges & Récompenses
          </CardTitle>
          <CardDescription>Vos badges de voyage obtenus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <span className="text-center text-xs font-medium">Éco-Guerrier</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-center text-xs font-medium">Expert Multimodal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <span className="text-center text-xs font-medium">Speedrunner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <span className="text-center text-xs font-medium">Optimiseur de Temps</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Award className="h-8 w-8 text-gray-400" />
              </div>
              <span className="text-center text-xs font-medium">Verrouillé</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Award className="h-8 w-8 text-gray-400" />
              </div>
              <span className="text-center text-xs font-medium">Verrouillé</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Voir Tous les Badges
          </Button>
        </CardFooter>
      </Card>

      <Card className="col-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-500" />
            Classements & Défis
          </CardTitle>
          <CardDescription>Défis hebdomadaires et classements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-medium">Défi Hebdomadaire: Réduire le CO₂ de 20%</h4>
              <Progress value={65} className="h-2" />
              <p className="mt-1 text-xs text-muted-foreground">13% atteint, 2 jours restants</p>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-medium">Classement des Équipes</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded-md bg-blue-50 p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold">
                    1
                  </div>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Équipe Marketing" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Marketing</span>
                  <Badge variant="secondary" className="ml-auto">
                    2 450 pts
                  </Badge>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-blue-50 p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-bold">
                    2
                  </div>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Équipe Ventes" />
                    <AvatarFallback>VT</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Ventes</span>
                  <Badge variant="secondary" className="ml-auto">
                    2 120 pts
                  </Badge>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-green-100 p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-200 text-xs font-bold">
                    3
                  </div>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Votre Équipe" />
                    <AvatarFallback>VE</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Votre Équipe</span>
                  <Badge variant="secondary" className="ml-auto">
                    1 980 pts
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Rejoindre un Nouveau Défi
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

