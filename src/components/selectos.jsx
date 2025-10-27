import React from "react";

export default function Selector({ label, value, onChange, opciones }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label
        style={{
          display: "block",
          marginBottom: "5px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          cursor: "pointer",
          backgroundColor: "#fff", // fondo blanco
          color: "#333", // texto oscuro
          appearance: "none",
        }}
      >
        {opciones.map((c) => (
          <option
            key={c.name}
            value={c.name}
            style={{
              color: "#333",
              backgroundColor: "#fff",
            }}
          >
            {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
