import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "./components/dashboard-header"
import { DashboardNav } from "./components/dashboard-nav"
import { GamificationSection } from "./components/gamification-section"
import { StressPreventionSection } from "./components/stress-prevention-section"
import Link from "next/link"
import { Train, Car } from "lucide-react"

export default function Dashboard() {
  return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-green-50">
        <DashboardHeader />
        <div className="flex flex-1 z-1000">
          <DashboardNav />
          <main className="p-6 md:p-8 bg-background flex-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Bienvenue, Thomas</h1>
                <p className="text-muted-foreground">
                  Votre tableau de bord d'optimisation de voyage avec fonctionnalités de gamification et de réduction du
                  stress.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">XP Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3 450</div>
                    <p className="text-xs text-muted-foreground">+12% depuis la semaine dernière</p>
                    <Progress value={68} className="mt-3 h-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">CO₂ Économisé</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">124 kg</div>
                    <p className="text-xs text-muted-foreground">+8% depuis le mois dernier</p>
                    <Progress value={75} className="mt-3 h-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Niveau de Stress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Faible</div>
                    <p className="text-xs text-muted-foreground">-15% depuis la semaine dernière</p>
                    <Progress value={25} className="mt-3 h-2 bg-green-100" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Prochain Voyage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Paris → Nantes</div>
                    <p className="text-xs text-muted-foreground">Demain, 9h15</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Badge variant="outline" className="bg-blue-50">
                        TGV INOUI
                      </Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Optimisé
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="travel-planner" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="travel-planner">Planificateur de Voyage</TabsTrigger>
                  <TabsTrigger value="gamification">Gamification</TabsTrigger>
                  <TabsTrigger value="stress-prevention">Prévention du Stress</TabsTrigger>
                </TabsList>
                <TabsContent value="gamification" className="space-y-4">
                  <GamificationSection />
                </TabsContent>
                <TabsContent value="stress-prevention" className="space-y-4">
                  <StressPreventionSection />
                </TabsContent>
                <TabsContent value="travel-planner" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Planificateur de Voyage</CardTitle>
                      <CardDescription>Planifiez et optimisez vos prochains voyages.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-medium">Voyages à Venir</h3>
                          <Button size="sm" asChild>
                            <Link href="/ajouter-trajet">Ajouter un trajet</Link>
                          </Button>
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between rounded-md bg-blue-50 p-3">
                            <div>
                              <p className="font-medium">Paris → Nantes → La Rochelle</p>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Badge variant="outline" className="mr-2 bg-blue-50">
                                <span className="flex items-center">
                                  <Train className="h-3 w-3 mr-1" />
                                  TGV INOUI
                                </span>
                                </Badge>
                                <Badge variant="outline" className="bg-green-50">
                                <span className="flex items-center">
                                  <Car className="h-3 w-3 mr-1" />
                                  Renault Zoé
                                </span>
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Demain, 9h15</p>
                            </div>
                            <Button size="sm" variant="outline" asChild>
                              <Link href="/mes-trajets">Détails</Link>
                            </Button>
                          </div>
                          <div className="flex items-center justify-between rounded-md bg-blue-50 p-3">
                            <div>
                              <p className="font-medium">Bordeaux → Toulouse</p>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Badge variant="outline" className="bg-blue-50">
                                <span className="flex items-center">
                                  <Train className="h-3 w-3 mr-1" />
                                  TGV OUIGO
                                </span>
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Vendredi, 14h30</p>
                            </div>
                            <Button size="sm" variant="outline" asChild>
                              <Link href="/mes-trajets">Détails</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Button variant="outline" asChild>
                          <Link href="/mes-trajets">Voir tous mes trajets</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
  )
}

