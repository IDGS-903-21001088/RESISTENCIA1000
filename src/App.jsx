import React, { useState } from "react";
import Resistor from "./components/Resistor";
import Selector from "./components/selectos";
import TablaColores from "./components/TablaColores";
import "./App.css";

const COLORES = [
  { name: "negro", hex: "#000000", value: 0, mult: 1 },
  { name: "marrón", hex: "#8B4513", value: 1, mult: 10 },
  { name: "rojo", hex: "#FF0000", value: 2, mult: 100 },
  { name: "naranja", hex: "#FF8C00", value: 3, mult: 1000 },
  { name: "amarillo", hex: "#FFD700", value: 4, mult: 10000 },
  { name: "verde", hex: "#008000", value: 5, mult: 100000 },
  { name: "azul", hex: "#0000FF", value: 6, mult: 1000000 },
  { name: "violeta", hex: "#8A2BE2", value: 7, mult: 10000000 },
  { name: "gris", hex: "#808080", value: 8, mult: 100000000 },
  { name: "blanco", hex: "#FFFFFF", value: 9, mult: 1000000000 },
  { name: "dorado", hex: "#FFD700", value: null, mult: 0.1, tol: "±5%" },
  { name: "plateado", hex: "#C0C0C0", value: null, mult: 0.01, tol: "±10%" },
];

export default function App() {
  const [b1, setB1] = useState("marrón");
  const [b2, setB2] = useState("negro");
  const [mult, setMult] = useState("rojo");
  const [tol, setTol] = useState("dorado");

  const calcular = () => {
    const c1 = COLORES.find((c) => c.name === b1);
    const c2 = COLORES.find((c) => c.name === b2);
    const cm = COLORES.find((c) => c.name === mult);
    const ct = COLORES.find((c) => c.name === tol);

    if (!c1 || !c2 || !cm || c1.value === null || c2.value === null) {
      return "—";
    }

    const valor = (c1.value * 10 + c2.value) * cm.mult;
    const tolerancia = ct?.tol || "±20%";

    if (valor >= 1000000) {
      return `${(valor / 1000000).toFixed(1)} MΩ ${tolerancia}`;
    }
    if (valor >= 1000) {
      return `${(valor / 1000).toFixed(1)} kΩ ${tolerancia}`;
    }
    return `${valor} Ω ${tolerancia}`;
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Calculadora de Resistencias</h1>

        <Resistor />

        <div className="resultado">{calcular()}</div>

        <Selector
          label="1ª Banda"
          value={b1}
          onChange={setB1}
          opciones={COLORES.filter((c) => c.value !== null)}
        />

        <Selector
          label="2ª Banda"
          value={b2}
          onChange={setB2}
          opciones={COLORES.filter((c) => c.value !== null)}
        />

        <Selector
          label="Multiplicador"
          value={mult}
          onChange={setMult}
          opciones={COLORES}
        />

        <Selector
          label="Tolerancia"
          value={tol}
          onChange={setTol}
          opciones={COLORES.filter((c) => c.tol)}
        />

        <TablaColores />
      </div>
    </div>
  );
}
