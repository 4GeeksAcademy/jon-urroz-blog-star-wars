import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVehicle } from "../services/swapi";

function Vehicles() {
    const { id } = useParams()
    const [vehicleData, setVehicleData] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getVehicle() {
            try {
                const data = await fetchVehicle(id);
                setVehicleData(data.result.properties);
            } catch (err) {
                setError(err.message);
            }
        }
        getVehicle();
    }, [id]);

    if (error) return <div>Error: {error}</div>;
    if (!vehicleData) return <div>Cargando...</div>

    return (
        <div style={{ padding: "2 rem" }}>
            <h2>Nombre: {vehicleData.name}</h2>
            <h2>Capacidad de carga: {vehicleData.cargo_capacity}</h2>
            <h2>Consumibles: {vehicleData.consumables}</h2>
            <h2>Valor: {vehicleData.cost_in_credits}</h2>
            <h2>Tripulación: {vehicleData.crew}</h2>
            <h2>Longitud: {vehicleData.length}</h2>
            <h2>Fabricante: {vehicleData.manufacturer}</h2>
            <h2>Velocidad maxima en atmosfera: {vehicleData.max_atmosphering_speed}</h2>
            <h2>Pasajeros: {vehicleData.passengers}</h2>
            <h2>Clase de vehículo: {vehicleData.vehicle_class}</h2>
            <h2>Modelo: {vehicleData.model}</h2>
        </div>
    )
}

export default Vehicles;