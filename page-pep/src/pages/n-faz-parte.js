import React from 'react';
import { useNavigate } from 'react-router-dom';

const NaoFazParte = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>😢 Você ainda não faz parte do programa</h1>
      <p>Que tal se inscrever e aproveitar os benefícios?</p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Voltar para a página inicial
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#282c34'
  },
  button: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px'
  }
};

export default NaoFazParte;
