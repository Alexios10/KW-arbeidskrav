import React, { useEffect, useRef, useState } from "react";
import { Feature, Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Point } from "ol/geom";
import "ol/ol.css";
import { MapBrowserEvent } from "ol";
import "./styles.css";
import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";
import { FeatureLike } from "ol/Feature";

useGeographic();

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [selectedShelter, setSelectedShelter] = useState<{
    romnr: number;
    adresse: string;
    plasser: number;
  } | null>(null);

  let tilfluktsromLayer;

  // Function to determine the style based on 'plasser' property
  function tilfluktsromStyle(feature: FeatureLike) {
    const capacity = feature.get("plasser");

    let color: string;
    if (capacity > 1000) {
      color = "rgba(0,102,204, 0.7)"; // Large shelters (1000+ places)
    } else if (capacity > 0) {
      color = "rgba(0,204,0, 0.7)"; // Small shelters (1-1000 places)
    } else {
      color = "red"; // No capacity (0 places)
    }

    return new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({ color: color }),
        stroke: new Stroke({ color: "black", width: 1 }),
      }),
    });
  }

  const map = new Map({
    view: new View({ center: [10.78, 59.91], zoom: 13 }),
    layers: [
      new TileLayer({ source: new OSM() }),

      // Sivilforsvarsdistrikter layer
      new VectorLayer({
        source: new VectorSource({
          url: "http://localhost:5174/kws2100-arbeidskrav-Nadahm3d/geojson/Sivilforsvarsdistrikter.geojson",
          format: new GeoJSON(),
        }),
        style: new Style({
          fill: new Fill({
            color: "rgba(0, 0, 0, 0)",
          }),
          stroke: new Stroke({
            color: "blue",
            width: 2,
          }),
        }),
      }),

      // Tilfluktsrom layer
      (tilfluktsromLayer = new VectorLayer({
        source: new VectorSource({
          url: "http://localhost:5174/kws2100-arbeidskrav-Nadahm3d/geojson/Offentlige tilfluktsrom.geojson",
          format: new GeoJSON(),
        }),
        style: tilfluktsromStyle,
      })),
    ],
  });

  useEffect(() => {
    if (mapRef.current) {
      map.setTarget(mapRef.current!);
    }

    map.on("pointermove", function (event) {
      let hovered = false;

      // Først setter du tilbake alle stilene på punktene
      tilfluktsromLayer
        .getSource()
        ?.getFeatures()
        .forEach((feature) => {
          if (feature instanceof Feature) {
            feature.setStyle(tilfluktsromStyle(feature)); // Sett tilbake den originale stilen
          }
        });

      map.forEachFeatureAtPixel(
        event.pixel,
        function (feature: FeatureLike, layer) {
          if (layer === tilfluktsromLayer && feature instanceof Feature) {
            hovered = true;
            feature.setStyle(
              new Style({
                image: new CircleStyle({
                  radius: 7,
                  fill: new Fill({ color: "yellow" }),
                  stroke: new Stroke({ color: "black", width: 2 }),
                }),
              }),
            );
            map.getTargetElement().style.cursor = "pointer";
          }
        },
      );

      if (!hovered) {
        map.getTargetElement().style.cursor = "grab";
      }
    });

    // Information overlay when clicking on a specific point
    map.on("singleclick", (event: MapBrowserEvent<MouseEvent>) => {
      let foundFeature = false;

      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        if (feature.getGeometry() instanceof Point) {
          const properties = feature.getProperties();
          setSelectedShelter({
            romnr: properties.romnr || 0,
            adresse: properties.adresse || "Ukjent adresse",
            plasser: properties.plasser || 0,
          });

          foundFeature = true;
        }
      });

      // If no feature is clicked, close the information overlay
      if (!foundFeature) {
        setSelectedShelter(null);
      }
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div>
      <h1>Kartapplikasjon</h1>

      {/* Map container */}
      <div ref={mapRef} className="map-container"></div>

      {/* Shelter details */}
      {selectedShelter && (
        <aside className="shelter-overlay">
          <h2>Tilfluktsrom</h2>
          <p>
            <strong>Romnummer:</strong> {selectedShelter.romnr}
          </p>
          <p>
            <strong>Adresse:</strong> {selectedShelter.adresse}
          </p>
          <p>
            <strong>Kapasitet:</strong> {selectedShelter.plasser}
          </p>
          <button onClick={() => setSelectedShelter(null)}>Lukk</button>
        </aside>
      )}
    </div>
  );
}
