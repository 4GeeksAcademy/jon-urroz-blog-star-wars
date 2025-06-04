import { useNavigate } from 'react-router-dom';
import { useStarWars } from "../hooks/useStarWars";
import { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

function PlanetCard() {
  const navigate = useNavigate();
  const { planets, loading, error } = useStarWars();
  const { dispatch, store } = useContext(StarWarsContext);

  const isFavorite = (item) =>
    store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);

  const handleToggleFavorite = (planet) => {
    const favorite = { ...planet, type: 'planet' };

    if (isFavorite(favorite)) {
      dispatch({ type: 'remove_favorite', payload: { id: favorite.uid, type: favorite.type } });
    } else {
      dispatch({ type: 'add_favorite', payload: { favorite } });
    }
  };

  if (loading) return <div>Cargando planetas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex gap-3 overflow-auto pb-3">
      {planets.map((planet) => {
        const favoriteItem = { ...planet, type: 'planet' };
        return (
          <div key={planet.uid} className="card styled-card" style={{ width: '18rem' }}>
            <img
              src="https://i.pinimg.com/474x/f5/f3/8c/f5f38c6c78c7e0492ed46d51d0731a69.jpg"
              className="card-img-top"
              alt={planet.name}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">Descubre mundos fascinantes de Star Wars</p>
              <button onClick={() => navigate(`/planets/${planet.uid}`)} className="btn btn-primary">
                Ir a perfil
              </button>
              <button
                onClick={() => handleToggleFavorite(planet)}
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

export default PlanetCard;

