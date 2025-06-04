import CharacterCard from '../components/CharacterCard';
import PlanetsCard from '../components/PlantesCard';
import VehiclesCard from '../components/VehiclesCard';

function Home() {
  return (
    <div className="container py-5">
      <section className="mb-5">
        <h2 className="mb-3 border-bottom pb-2">Personajes</h2>
        <div className="d-flex gap-3 overflow-auto">
          <CharacterCard />
        </div>
      </section>
      <section className="mb-5">
        <h2 className="mb-3 border-bottom pb-2">Planetas</h2>
        <div className="d-flex gap-3 overflow-auto">
          <PlanetsCard />
        </div>
      </section>
      <section className="mb-5">
        <h2 className="mb-3 border-bottom pb-2">Vehículos</h2>
        <div className="d-flex gap-3 overflow-auto">
          <VehiclesCard />
        </div>
      </section>
    </div>
  );
}

export default Home;
