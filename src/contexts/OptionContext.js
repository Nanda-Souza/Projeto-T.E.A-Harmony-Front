import { createContext, useState } from 'react';

export const OptionContext = createContext();

export const OptionProvider = ({ children }) => {  
  const [home, setHome] = useState(false);
  const [patient, setPatient] = useState(false);
  const [therapist, setTherapist] = useState(false);    

  return (
  <OptionContext.Provider value={{ home, setHome, patient, setPatient, therapist, setTherapist  }}>
    {children}
  </OptionContext.Provider>
  );
}
