import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPlanet } from "../services/swapi";

function Planets() {
    const { id } = useParams()
    const [planetData, setPlanetData] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getPlanet() {
            try {
                const data = await fetchPlanet(id);
                setPlanetData(data.result.properties);
            } catch (err) {
                setError(err.message);
            }
        }
        getPlanet();
    }, [id]);

    useEffect(() => {
        console.log("planet data updated:", planetData);
    }, [planetData]);

    if (error) return <div>Error: {error}</div>;
    if (!planetData) return <div>Cargando...</div>

    return (
        <div>
            <div style={{ padding: "2 rem" }}>
                <h2>Nombre: {planetData.name}</h2>
                <h2>Clima: {planetData.climate}</h2>
                <h2>Diametro: {planetData.diameter}</h2>
                <h2>Gravedad: {planetData.gravity}</h2>
                <h2>Periodo orbital: {planetData.orbital_period}</h2>
                <h2>Populación: {planetData.population}</h2>
                <h2>Periodo de rotación: {planetData.rotation_period}</h2>
                <h2>Superficie con agua: {planetData.surface_water}</h2>
                <h2>Terreno: {planetData.terrain}</h2>
            </div>

        </div>
    )
}

export default Planets;