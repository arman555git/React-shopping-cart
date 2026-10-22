import { createContext } from "react";
import { useState } from "react";
export let MyStore = createContext();
 export const ContextProvider =({ children })=>{
      const [toggel,setToggel]=useState(true); 
      const [cardIteam,setCardIteam]=useState([]);  
 return (<MyStore.Provider value={{toggel,cardIteam,setToggel,setCardIteam}}>{children}</MyStore.Provider>
 );
}