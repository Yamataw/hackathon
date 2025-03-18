import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Car, ChevronRight, Clock, MapPin, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Trajet} from "@/app/type/Trajet";

type TrajetCardProps = {
    trajet: Trajet;
};

const TrajetCard = ({ trajet }: TrajetCardProps) => {
    return (
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
                    <Badge variant="outline" className="bg-green-50">{trajet.status}</Badge>
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
                                <div className="font-medium">{segment.from} → {segment.to}</div>
                                <div className="text-sm text-muted-foreground flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {segment.time} • {segment.transport}
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
    );
};

export default TrajetCard;
