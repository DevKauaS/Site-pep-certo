import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoItau from '../img/LogoItau.png'; // Caminho correto

const JaFazParte = () => {
  const navigate = useNavigate();

  return (
    <div id='divFazParte'> 
      <h1 id='tituloFazParte'>Qual Programa você faz parte?</h1>
      <div id='botoesContainer'>
        <button className='botoes' onClick={() => navigate('../s-part-pep')}>
          PEP
        </button>
        <button className='botoes' onClick={() => navigate('../s-part-orr')}>
          ORR
        </button>
      </div>
      <img src={LogoItau} alt="Logo do Itaú" className="logo" />

    </div>
  );
};

export default JaFazParte;
