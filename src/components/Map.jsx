import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 800,
        center: [-55, -10],
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <ZoomableGroup>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#8e03ff"
                stroke="#FFFFFF"
                strokeWidth={0.5}
              >
                {/* Renderiza o nome do estado */}
                <text
                  textAnchor="middle"
                  style={{ pointerEvents: "none" }}
                  dy={-10}
                >
                  {geo.properties.name}
                </text>
              </Geography>
            ))
          }
        </Geographies>
        <Annotation
          subject={[-46.6388, -23.5489]}
          dx={-70}
          dy={-50}
          connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-40" y="-20" textAnchor="center" alignmentBaseline="middle" fill="white">
            {"São Paulo | BR"}
          </text>
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
