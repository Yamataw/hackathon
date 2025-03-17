import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "../components/dashboard-header"
import { DashboardNav } from "../components/dashboard-nav"
import { Calendar, Car, ChevronRight, Clock, MapPin, Train } from "lucide-react"
import Link from "next/link"

export default function MesTrajets() {
  const trajetsAVenir = [
    {
      id: 1,
      nom: "Paris → Lyon → Grenoble",
      date: "Demain, 9h15",
      segments: [
        { type: "train", from: "Paris", to: "Lyon", time: "9h15 - 11h30" },
        { type: "car", from: "Lyon", to: "Grenoble", time: "12h00 - 13h30" },
      ],
      distance: "463 km",
      duree: "4h15",
      co2: "12,4 kg",
      xp: 85,
      status: "optimisé",
    },
    {
      id: 2,
      nom: "Lyon → Marseille",
      date: "Vendredi, 14h30",
      segments: [{ type: "train", from: "Lyon", to: "Marseille", time: "14h30 - 16h45" }],
      distance: "315 km",
      duree: "2h15",
      co2: "3,2 kg",
      xp: 60,
      status: "optimisé",
    },
  ]

  const trajetsPassés = [
    {
      id: 3,
      nom: "Paris → Bordeaux",
      date: "15 mars 2025",
      segments: [{ type: "train", from: "Paris", to: "Bordeaux", time: "8h30 - 10h45" }],
      distance: "583 km",
      duree: "2h15",
      co2: "5,8 kg",
      xp: 70,
      status: "complété",
    },
    {
      id: 4,
      nom: "Bordeaux → Toulouse → Montpellier",
      date: "10 mars 2025",
      segments: [
        { type: "train", from: "Bordeaux", to: "Toulouse", time: "9h00 - 10h30" },
        { type: "car", from: "Toulouse", to: "Montpellier", time: "11h00 - 13h15" },
      ],
      distance: "432 km",
      duree: "4h15",
      co2: "14,2 kg",
      xp: 65,
      status: "complété",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-green-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Mes Trajets</h1>
              <p className="text-muted-foreground">Gérez vos voyages passés et à venir</p>
            </div>
            <Button asChild>
              <Link href="/ajouter-trajet">Ajouter un Trajet</Link>
            </Button>
          </div>

          <Tabs defaultValue="a-venir" className="space-y-6">
            <TabsList>
              <TabsTrigger value="a-venir">À Venir</TabsTrigger>
              <TabsTrigger value="passes">Passés</TabsTrigger>
            </TabsList>

            <TabsContent value="a-venir" className="space-y-6">
              {trajetsAVenir.map((trajet) => (
                <Card key={trajet.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{trajet.nom}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {trajet.date}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-green-50">
                        {trajet.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-4">
                      {trajet.segments.map((segment, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            {segment.type === "train" ? (
                              <Train className="h-5 w-5 text-blue-500" />
                            ) : (
                              <Car className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <div className="ml-3 space-y-1">
                            <div className="font-medium">
                              {segment.from} → {segment.to}
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {segment.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{trajet.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{trajet.duree}</span>
                      </div>
                      <div>CO₂: {trajet.co2}</div>
                      <div className="font-medium text-blue-600">+{trajet.xp} XP</div>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Détails <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="passes" className="space-y-6">
              {trajetsPassés.map((trajet) => (
                <Card key={trajet.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{trajet.nom}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {trajet.date}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-blue-50">
                        {trajet.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-4">
                      {trajet.segments.map((segment, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            {segment.type === "train" ? (
                              <Train className="h-5 w-5 text-blue-500" />
                            ) : (
                              <Car className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <div className="ml-3 space-y-1">
                            <div className="font-medium">
                              {segment.from} → {segment.to}
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {segment.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{trajet.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{trajet.duree}</span>
                      </div>
                      <div>CO₂: {trajet.co2}</div>
                      <div className="font-medium text-blue-600">+{trajet.xp} XP</div>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Détails <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

