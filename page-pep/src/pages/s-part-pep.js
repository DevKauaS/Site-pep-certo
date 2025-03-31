import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoItau from '../img/LogoItau.png'; // Caminho correto

const SPartPEP = () => {
  const navigate = useNavigate();

  return (
    <div id='divFazParte'> 
      <h1 id='tituloFazParte'>Visão Geral PEP</h1>
      <img src={LogoItau} alt="Logo do Itaú" className="logo" />

    </div>
  );
};

export default SPartPEP;
