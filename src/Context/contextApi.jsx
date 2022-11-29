import { useContext, useState, useEffect, createContext } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [contenu, setContenu] = useState('vb vb')

    return (
        <StateContext.Provider value={{ contenu, setContenu }}>
            {children}
        </StateContext.Provider>
    )
}
export default StateContextProvider;