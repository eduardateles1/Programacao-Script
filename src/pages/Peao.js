// Peao.js
import style from '@/styles/Tabuleiro.module.css';
import React from 'react';

const Peao = ({ isBlack }) => {
    const peaoStyle = {
      backgroundColor: isBlack ? 'red' : 'blue',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    };
  
    return <div style={peaoStyle}></div>;
  };
  
  export default Peao;
