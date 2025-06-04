const BASE_URL = 'https://swapi.tech/api';

//Llamadas a la API para obtener todos los personajes, planetas y vehículos

export async function fetchCharacters() {
    const res = await fetch(`${BASE_URL}/people`);
    if (!res.ok) throw new Error(`Error al cargar personajes`);
    return res.json();
}

export async function fetchPlanets() {
    const res = await fetch(`${BASE_URL}/planets`);
    if (!res.ok) throw new Error(`Error al cargar planetas`);
    return res.json();
}

export async function fetchVehicles() {
    const res = await fetch(`${BASE_URL}/vehicles`);
    if (!res.ok) throw new Error(`Error al cargar vehículos`);
    return res.json();
}

// Llamadas a la API para obtener un personaje, planeta o vehículo específico por ID

export async function fetchCharacter(id) {
    const res = await fetch(`${BASE_URL}/people/${id}`);
    if (!res.ok) throw new Error(`Error al cargar personaje`);
    return res.json();
}

export async function fetchPlanet(id) {
    const res = await fetch(`${BASE_URL}/planets/${id}`);
    if (!res.ok) throw new Error(`Error al cargar planetas`);
    return res.json();
}

export async function fetchVehicle(id) {
    const res = await fetch(`${BASE_URL}/vehicles/${id}`);
    if (!res.ok) throw new Error(`Error al cargar vehículos`);
    return res.json();

}    