import { useNavigate } from 'react-router-dom';
import { useStarWars } from "../hooks/useStarWars";
import { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

function CharacterCard() {
  const navigate = useNavigate();
  const { characters, loading, error } = useStarWars();
  const { dispatch, store } = useContext(StarWarsContext);

  const isFavorite = (item) =>
    store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);

  const handleToggleFavorite = (char) => {
    const favorite = { ...char, type: 'character' };

    if (isFavorite(favorite)) {
      dispatch({ type: 'remove_favorite', payload: { id: favorite.uid, type: favorite.type } });
    } else {
      dispatch({ type: 'add_favorite', payload: { favorite } });
    }
  };

  if (loading) return <div>Cargando personajes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex gap-3 overflow-auto pb-3">
      {characters.map((char) => {
        const favoriteItem = { ...char, type: 'character' };
        return (
          <div key={char.uid} className="card styled-card" style={{ width: '18rem' }}>
            <img
              src="https://i.pinimg.com/474x/f5/f3/8c/f5f38c6c78c7e0492ed46d51d0731a69.jpg"
              className="card-img-top"
              alt={char.name}
            />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <p className="card-text">Explora los personajes más icónicos de Star Wars</p>
              <button onClick={() => navigate(`/characters/${char.uid}`)} className="btn btn-primary">
                Ir a perfil
              </button>
              <button
                onClick={() => handleToggleFavorite(char)}
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

export default CharacterCard;
