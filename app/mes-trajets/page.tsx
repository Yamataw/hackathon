"use client";

import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {DashboardHeader} from "../components/dashboard-header"
import {DashboardNav} from "../components/dashboard-nav"
import Link from "next/link"
import {Trajet} from "../type/Trajet"
import {useContext} from "react";
import {TrajetContext} from "@/app/context/TrajetContext";
import TrajetCard from "@/app/components/MesTrajet";

export default function MesTrajets() {
    const trajetContext = useContext(TrajetContext);

    if (!trajetContext) {
        return <p>Chargement des trajets...</p>;
    }

    const {trajets} = trajetContext;

    // Séparer trajets à venir et passés en fonction de leur date
    const today = new Date();
    const trajetsAVenir = trajets.filter((trajet: Trajet) => new Date(trajet.date) > today);
    const trajetsPasses = trajets.filter((trajet: Trajet) => new Date(trajet.date) <= today);

  return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-green-50">
        <DashboardHeader />
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-6 md:p-8 bg-background ">
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

                        {/* 🔥 Trajets à venir */}
                        <TabsContent value="a-venir" className="space-y-6">
                            {
                                trajetsAVenir.length > 0 ? (
                                    trajetsAVenir.map((trajet) => <TrajetCard key={trajet.id} trajet={trajet}/>)
                                ) : (
                                    <p>Aucun trajet à venir.</p>
                                )}
                        </TabsContent>

                        {/* 🔥 Trajets passés */}
                        <TabsContent value="passes" className="space-y-6">
                            {trajetsPasses.length > 0 ? (
                                trajetsPasses.map((trajet) => <TrajetCard key={trajet.id} trajet={trajet}/>)
                            ) : (
                                <p>Aucun trajet passé.</p>
                            )}
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}

