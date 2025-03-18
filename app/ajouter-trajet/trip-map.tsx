"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L from "leaflet"

// Coordonnées factices pour les villes françaises
const cityCoordinates: Record<string, [number, number]> = {
  Paris: [48.8566, 2.3522],
  Lyon: [45.7578, 4.832],
  Marseille: [43.2965, 5.3698],
  Toulouse: [43.6047, 1.4442],
  Nice: [43.7102, 7.262],
  Nantes: [47.2184, -1.5536],
  Strasbourg: [48.5734, 7.7521],
  Montpellier: [43.6108, 3.8767],
  Bordeaux: [44.8378, -0.5792],
  Lille: [50.6292, 3.0573],
  Rennes: [48.1173, -1.6778],
  Grenoble: [45.1885, 5.7245],
  Dijon: [47.322, 5.0415],
  Angers: [47.4784, -0.5632],
  Tours: [47.3941, 0.6848],
}

// Fonction pour générer un point intermédiaire entre deux coordonnées
const getIntermediatePoint = (start: [number, number], end: [number, number], ratio: number): [number, number] => {
  return [start[0] + (end[0] - start[0]) * ratio, start[1] + (end[1] - start[1]) * ratio]
}

// Fonction pour générer une route avec des points intermédiaires
const generateRoute = (start: [number, number], end: [number, number], type: string): [number, number][] => {
  const route: [number, number][] = [start]

  // Pour les trajets en train, on fait une ligne plus directe
  if (type === "train") {
    const midPoint = getIntermediatePoint(start, end, 0.5)
    const offset = type === "train" ? 0.05 : 0.15

    const dx = end[0] - start[0]
    const dy = end[1] - start[1]
    const perpX = -dy
    const perpY = dx
    const length = Math.sqrt(perpX * perpX + perpY * perpY)

    if (length > 0) {
      const normalizedPerpX = perpX / length
      const normalizedPerpY = perpY / length

      midPoint[0] += normalizedPerpX * offset
      midPoint[1] += normalizedPerpY * offset
    }

    route.push(midPoint)
  } else {
    for (let i = 1; i < 5; i++) {
      const ratio = i / 5
      const point = getIntermediatePoint(start, end, ratio)
      point[0] += (Math.random() - 0.5) * 0.05
      point[1] += (Math.random() - 0.5) * 0.05
      route.push(point)
    }
  }

  route.push(end)
  return route
}

interface TripMapProps {
  segments: {
    id: number
    type: string
    from: string
    to: string
    departTime: string
    arriveTime: string
    options: string[]
  }[]
}

export function TripMap({ segments }: TripMapProps) {
  const allCities = segments.flatMap((segment) => [segment.from, segment.to])
  const validCities = allCities.filter((city) => city && cityCoordinates[city])

  const defaultCenter: [number, number] =
      validCities.length > 0 ? cityCoordinates[validCities[0]] : [46.603354, 1.888334]

  return (
      <MapContainer center={defaultCenter} zoom={5} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {segments.map((segment) => {
          if (!cityCoordinates[segment.from] || !cityCoordinates[segment.to]) {
            return null
          }

          const fromCoords = cityCoordinates[segment.from]
          const toCoords = cityCoordinates[segment.to]
          const route = generateRoute(fromCoords, toCoords, segment.type)

          return (
              <div key={segment.id}>
                <Marker position={fromCoords}>
                  <Popup>
                    <b>{segment.from}</b>
                    <br />
                    Départ: {segment.departTime}
                  </Popup>
                </Marker>

                <Marker position={toCoords}>
                  <Popup>
                    <b>{segment.to}</b>
                    <br />
                    Arrivée: {segment.arriveTime}
                  </Popup>
                </Marker>

                <Polyline
                    positions={route}
                    color={segment.type === "train" ? "#3b82f6" : "#10b981"}
                    weight={4}
                    dashArray={segment.type === "train" ? "" : "5,10"}
                />
              </div>
          )
        })}
      </MapContainer>
  )
}
