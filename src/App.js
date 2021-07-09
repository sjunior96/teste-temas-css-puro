import React, { useState } from 'react';
import './themes/themes.css';
import Button from './components/Button';

export default () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const [temas, setTemas] = useState([{ id: 'light', nome: "Tema Claro" }, { id: 'dark', nome: "Tema Escuro" }]);

  return (
    <div className={`${currentTheme}`}>
      <h1>Temas</h1>
      <p>{currentTheme}</p>
      <p>{JSON.stringify(temas.filter((tema) => tema.id === currentTheme)[0])}</p>
      <Button />

      <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)}>
        {temas.map((tema) => <option key={tema.id} value={tema.id}>{tema.nome}</option>)}
      </select>
    </div>
  );
}