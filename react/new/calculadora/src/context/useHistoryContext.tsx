import { useContext } from "react";
import { HistoryContext } from "./HistoryContext";

export const useHistoryContext = () => useContext(HistoryContext);