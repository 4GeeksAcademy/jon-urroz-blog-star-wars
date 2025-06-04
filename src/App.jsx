import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Planets from './pages/Planets';
import Vehicles from './pages/Vehicles';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<Characters />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/vehicles/:id" element={<Vehicles />} />
      </Routes>
    </>
  );
}

export default App;