import { Brain, Clock, Headphones, Heart, Lightbulb, Moon, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export function StressPreventionSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-500" />
            Prévention du Burn-out
          </CardTitle>
          <CardDescription>Analysez votre charge de travail et vos habitudes de voyage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">Niveau de Stress Actuel</span>
              <span className="text-sm text-green-500 font-medium">Faible</span>
            </div>
            <Progress value={25} className="h-2" />
          </div>

          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-500" />
              Recommandation Personnalisée
            </h4>
            <p className="mt-2 text-sm">
              Vous avez eu une semaine chargée—envisagez d'activer le Mode Zen pour un voyage plus détendu sur votre
              prochain trajet Paris → Lyon.
            </p>
            <Button size="sm" variant="outline" className="mt-2 w-full">
              Activer le Mode Zen
            </Button>
          </div>

          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-500" />
              Analyse Hebdomadaire des Voyages
            </h4>
            <p className="mt-2 text-sm">
              Votre emploi du temps est serré aujourd'hui—nous avons préparé un itinéraire optimisé pour une efficacité
              maximale.
            </p>
            <Button size="sm" variant="outline" className="mt-2 w-full">
              Voir l'Itinéraire Optimisé
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-blue-500" />
            Espace Détente
          </CardTitle>
          <CardDescription>Outils de relaxation adaptés à votre voyage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium">Ambiances Sonores</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm" className="h-auto flex flex-col items-center p-2">
                <Moon className="h-6 w-6 mb-1" />
                <span className="text-xs">Pluie</span>
              </Button>
              <Button variant="outline" size="sm" className="h-auto flex flex-col items-center p-2">
                <Moon className="h-6 w-6 mb-1" />
                <span className="text-xs">Forêt</span>
              </Button>
              <Button variant="outline" size="sm" className="h-auto flex flex-col items-center p-2">
                <Moon className="h-6 w-6 mb-1" />
                <span className="text-xs">Océan</span>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium">Respiration Guidée</h4>
            <div className="mt-3 flex justify-center">
              <div className="relative h-24 w-24 rounded-full border-4 border-blue-200 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
                <span className="text-lg font-semibold">4-7-8</span>
              </div>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              <Button size="sm" variant="outline">
                Démarrer
              </Button>
              <Button size="sm" variant="outline">
                Personnaliser
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Explorer Plus d'Outils de Relaxation
          </Button>
        </CardFooter>
      </Card>

      <Card className="col-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Mode Hyperfocus
          </CardTitle>
          <CardDescription>Environnement sans distraction pour un voyage productif</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium">Minuteur de Concentration</h4>
            <div className="mt-3 flex justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">25:00</div>
                <p className="text-xs text-muted-foreground">Technique Pomodoro</p>
              </div>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              <Button size="sm">Démarrer</Button>
              <Button size="sm" variant="outline">
                Réinitialiser
              </Button>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium">Niveau de Bruit Ambiant</h4>
            <div className="mt-3">
              <Slider defaultValue={[30]} max={100} step={1} />
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Heart className="h-4 w-4 text-red-500" />
              Suggestions de Lecture Intelligentes
            </h4>
            <div className="mt-2 space-y-2">
              <div className="rounded bg-blue-50 p-2 text-sm">"L'Art du Voyage Conscient" - 8 min de lecture</div>
              <div className="rounded bg-blue-50 p-2 text-sm">"Productivité en Déplacement" - 5 min de lecture</div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Personnaliser les Paramètres de Concentration
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

