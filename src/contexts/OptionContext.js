import { createContext, useState } from 'react';

export const OptionContext = createContext();

export const OptionProvider = ({ children }) => {  
  const [home, setHome] = useState(false);
  const [patient, setPatient] = useState(false);    

  return (
  <OptionContext.Provider value={{ home, setHome, patient, setPatient  }}>
    {children}
  </OptionContext.Provider>
  );
}
