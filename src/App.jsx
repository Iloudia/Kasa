import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maison from './components/Maison/Maison';
import Accueil from './components/Accueil/Accueil';
import Header from './components/Header/Header';
import Erreur from './components/Erreur/Erreur';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Erreur />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/maison" element={<Maison />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
