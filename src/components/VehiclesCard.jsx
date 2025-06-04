import { useNavigate } from 'react-router-dom';
import { useStarWars } from "../hooks/useStarWars";
import { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

function VehicleCard() {
  const navigate = useNavigate();
  const { vehicles, loading, error } = useStarWars();
  const { dispatch, store } = useContext(StarWarsContext);

  const isFavorite = (item) =>
    store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);

  const handleToggleFavorite = (vehicle) => {
    const favorite = { ...vehicle, type: 'vehicle' };

    if (isFavorite(favorite)) {
      dispatch({ type: 'remove_favorite', payload: { id: favorite.uid, type: favorite.type } });
    } else {
      dispatch({ type: 'add_favorite', payload: { favorite } });
    }
  };

  if (loading) return <div>Cargando vehículos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex gap-3 overflow-auto pb-3">
      {vehicles.map((vehicle) => {
        const favoriteItem = { ...vehicle, type: 'vehicle' };

        return (
          <div key={vehicle.uid} className="card styled-card" style={{ width: '18rem' }}>
            <img src="https://i.pinimg.com/474x/f5/f3/8c/f5f38c6c78c7e0492ed46d51d0731a69.jpg" className="card-img-top" alt={vehicle.name} />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">Explora naves y vehículos legendarios</p>
              <button onClick={() => navigate(`/vehicles/${vehicle.uid}`)} className="btn btn-primary">
                Ir a perfil
              </button>
              <button
                onClick={() => handleToggleFavorite(vehicle)}
                className={`btn ms-2 ${isFavorite(favoriteItem) ? "btn-warning" : "btn-outline-warning"}`}
              >
                {isFavorite(favoriteItem) ? "Quitar de favoritos" : "Agregar a favoritos"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VehicleCard;
