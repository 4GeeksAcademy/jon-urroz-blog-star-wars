import { createContext, useContext, useEffect, useState } from "react";
import { fetchCharacters, fetchPlanets, fetchVehicles } from "../services/swapi";
import storeReducer, { initialStore } from "../store";
import { useReducer } from "react";

export const StarWarsContext = createContext();

export function StarWarsProvider({ children }) {

    const [store, dispatch] = useReducer(storeReducer, undefined, initialStore);

    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    async function loadData() {
        try {
            setLoading(true);
            const [charData, planetData, vehicleData] = await Promise.all([
                fetchCharacters(),
                fetchPlanets(),
                fetchVehicles(),
            ]);
            setCharacters(charData.results);
            setPlanets(planetData.results);
            setVehicles(vehicleData.results);
            setError(null);
        }   catch (err) {
            setError(err.message);
        }   finally {
            setLoading(false);
        }
        
    }

    loadData();
}, []);

return (
    <StarWarsContext.Provider
        value={{
            characters, 
            planets, 
            vehicles, 
            loading, 
            error,
            store,
            dispatch
        }}
    >    
        {children} 
    </StarWarsContext.Provider>

    );
}