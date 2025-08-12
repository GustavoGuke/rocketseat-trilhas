import { createContext, useState } from "react";
export const HistoryContext = createContext({});

export const CounterPovider = ({children}) => {
    const [history, setHistory] = useState([])
    function addHistory(value: string) {
        setHistory( (prevHistory) => [...prevHistory, value])
    }
    return (
        <HistoryContext.Provider value={{history, addHistory}}>
            {children}
        </HistoryContext.Provider>
    )
};