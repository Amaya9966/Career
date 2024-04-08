import React, { useState } from 'react';
import './Container.css'; // Importa il file CSS per gli stili

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false); // Usa useState per tracciare lo stato del collapse
  const [contentVisible, setContentVisible] = useState(true); // Usa useState per tracciare lo stato della visibilità del contenuto

  // Funzione per gestire il click sul titolo per mostrare/nascondere i figli
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    setContentVisible(!contentVisible); // Cambia lo stato della visibilità del contenuto
  };

  // Funzione per gestire il click sul pulsante per nascondere i figli
  const hideContent = () => {
    setContentVisible(false);
  };

  return (
    <div className="container">
      {/* Titolo cliccabile per mostrare/nascondere i figli */}
      <h2 className="title" onClick={toggleCollapse}>{title}</h2>
      {/* Condizione per mostrare/nascondere i figli in base allo stato del collapse e della visibilità del contenuto */}
      {(!collapsed && contentVisible) && <div className="content">{children}</div>}
      {/* Pulsante per nascondere il contenuto */}
      <button onClick={hideContent}>Hide Content</button>
    </div>
  );
};

export default Container;
