import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';


import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { changeLanguage } from 'i18next';
//src\backgound_inicio.jpg

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();

  const changeLenguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (

          <div className="language-buttons">
          <button className="language-button" onClick={() => changeLanguage('en')}>
            {t('English')}
          </button>
          <button className="language-button" onClick={() => changeLanguage('es')}>
            {t('Español')}
          </button>
        </div>
  );

};

const App: React.FC = () => {
  return (

    <div className='App-bg'>
      <LanguageSelector />
    <Router>
       <div className="App" >
        <header >
        
          
          <h1>Produmaq</h1>
          <h2>Escanear Productos</h2>
        </header>
        <Navbar /> {/* Incluye la Navbar */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} /> {/* Ruta de inicio */}
        </Routes>
      </div>
    </Router>
    </div>
  );
};




export default App;

// Componente para la página de inicio
const Home: React.FC = () => {
        

   return (
   
       
      <div>
        <h3>prueba</h3>
        <h2>Home</h2>

        <img  src="frontend/src/imagen_inicio.png" alt="background" />
      </div>
    );
  };
