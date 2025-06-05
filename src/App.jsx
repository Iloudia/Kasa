import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MaisonCard from './components/Maison/Maison';
import Accueil from './components/Accueil/Accueil';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Accueil />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/maison" element={<MaisonCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
