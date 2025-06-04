import { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

export function useStarWars() {
    const context = useContext(StarWarsContext);
    if (!context) {
        throw new Error('useStarWars debe usarse dentro de <StarWarsProvider');
    }
    return context;
}