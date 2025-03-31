import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import JaFazParte from './pages/ja-faz-parte';
import NaoFazParte from './pages/n-faz-parte';
import LogoItau from './img/LogoItau.png'
import SPartORR from './pages/s-part-orr';
import SPartPEP from './pages/s-part-pep';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ja-faz-parte" element={<JaFazParte />} />
        <Route path="/nao-faz-parte" element={<NaoFazParte />} />
        <Route path="/s-part-orr" element={<SPartORR />} />   
        <Route path="/s-part-pep" element={<SPartPEP />} />     
      </Routes>
    </Router>
  );
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id='divFazParte'> 
      <h1 id='tituloFazParte'>Você Participa de Algum Programa?</h1>
      <div id='botoesContainer'>
        <button className='botoes' onClick={() => navigate('/ja-faz-parte')}>
          Sim
        </button>
        <button className='botoes' onClick={() => navigate('/nao-faz-parte')}>
          Não
        </button>
      </div>
      <img src={LogoItau} alt="Logo do Itaú" className="logo" />

    </div>
  );
};

export {App};
