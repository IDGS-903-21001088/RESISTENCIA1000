import React from "react";

export default function Resistor() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
  <img 
    // CORREGIDO: Ruta absoluta desde la raíz de la aplicación, asume que 'images' está en 'public'
    src="/images/resis.jpg" 
    alt="Resistencia"
    // ... otros estilos
/>
    style={{ 
      maxWidth: "100%",
      height: "auto",
      borderRadius: "8px"
    }} 
  
</div>

  );
}