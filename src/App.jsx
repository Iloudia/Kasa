import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maison from './pages/Maison/Maison';
import Accueil from './pages/Accueil/Accueil';
import Header from './components/Header/Header';
import Erreur from './pages/Erreur/Erreur';
import About from './pages/Propos/Propos';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Maison />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
