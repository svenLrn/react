import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}


export function LanguageProvider({ children }) {
    const [selectedLanguage, setSelectedLanguage] = useState("en"); 
  
    const handleChangeLanguage = (language) => {
      setSelectedLanguage(language);
    };
  
    return (
      <LanguageContext.Provider value={{ selectedLanguage, handleChangeLanguage }}>
        <div>
          <label>Select Language: </label>
          <select
            value={selectedLanguage}
            onChange={(e) => handleChangeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="it">Italian</option>
          </select>
          {children}
        </div>
      </LanguageContext.Provider>
    );
  }
  