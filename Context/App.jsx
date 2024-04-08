import React, { useState, useContext } from 'react';

// Definisci il LanguageContext
const LanguageContext = React.createContext();

// Componente Clock che consumerà il LanguageContext
const Clock = () => {
  // Consuma il LanguageContext utilizzando useContext
  const language = useContext(LanguageContext);

  // Funzione per ottenere il testo del tempo corrente in base alla lingua
  const getLocalTimeText = () => {
    switch (language) {
      case 'en':
        return 'Local Time';
      case 'fr':
        return 'Heure Locale';
      case 'de':
        return 'Ortszeit';
      default:
        return 'Local Time';
    }
  };

  // Funzione per ottenere l'ora corrente in base alla lingua
  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString(language);
    return currentTime;
  };

  return (
    <div>
      <h2>{getLocalTimeText()}: {getCurrentTime()}</h2>
    </div>
  );
};

// Componente che fornisce il LanguageContext
const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Stato per la lingua selezionata

  return (
    // Fornisci il LanguageContext con il valore della lingua selezionata
    <LanguageContext.Provider value={selectedLanguage}>
      <div>
        {/* Selettore per selezionare la lingua */}
        <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          {/* Aggiungi altre opzioni per lingue aggiuntive se necessario */}
        </select>
        {/* Rendi il componente Clock all'interno del provider LanguageContext */}
        <Clock />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
