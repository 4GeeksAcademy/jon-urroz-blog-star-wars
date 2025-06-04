import { useParams } from "react-router-dom";
import { fetchCharacter } from "../services/swapi";
import { useEffect, useState } from "react";

function Characters() {
    const { id } = useParams()
    const [charData, setCharData] = useState(null) 
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getCharacter() {
            try {
                const data = await fetchCharacter(id);
                setCharData(data.result.properties);
            } catch (err) {
                setError(err.message);
            }
        }
        getCharacter();
    }, [id]);

    useEffect(() => {
        console.log("Character data updated:", charData);
    }, [charData]);

    if (error) return <div>Error: {error}</div>;
    if (!charData) return <div>Cargando...</div>

    return (
        <div style={{ padding: "2 rem" }}>
            <h2>Nombre: {charData.name}</h2>
            <h2>Fecha de nacimiento: {charData.birth_year}</h2>
            <h2>Color de ojos: {charData.eye_color}</h2>
            <h2>Genero: {charData.gender}</h2>
            <h2>Color de pelo: {charData.hair_color}</h2>
            <h2>Altura: {charData.height}</h2>
            <h2>Peso: {charData.mass}</h2>
            <h2>Color de piel: {charData.skin_color}</h2>
        </div>
    )
}

export default Characters;