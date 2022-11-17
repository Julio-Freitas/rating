import { useContext } from "react";
import { ContextRate } from ".";

export function useRate() {
    const context = useContext(ContextRate);
    return context
}
