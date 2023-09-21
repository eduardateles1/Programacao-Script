import React from 'react';
import Head from 'next/head';
import Square from '../components/Tabuleiro.jsx'; 
import styles from '../styles/Tabuleiro.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabuleiro de Damas</title>
        <meta name="description" content="Tabuleiro de Damas em Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tabuleiro de Damas</h1>
        <Square /> {/* Renderize o componente Square aqui */}
      </main>

      <footer className={styles.footer}>
        {/* Adicione o rodapé aqui */}
      </footer>
    </div>
  );
};

export default Home;
