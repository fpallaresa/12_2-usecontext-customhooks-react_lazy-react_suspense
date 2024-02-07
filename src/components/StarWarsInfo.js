import React from "react";
import useFetch from "../hooks/useFetch";
import { ThemeContext } from "../App";
import { LoginContext } from "../App";

const StarwarsInfo = () => {

  const login = React.useContext(LoginContext);
  const theme = React.useContext(ThemeContext);

  const API_URL = "https://swapi.dev/api/people/1";

  const [info] = useFetch(API_URL);

  return (
    <div style={{ background: theme.background, color: theme.fontColor }}>
      {login.currentUsername ? (
        <>
          <p>Información de Luke Skywalker:</p>
          {info ? (
            <div>
              <p>Nombre: {info.name}</p>
              <p>Altura: {info.height}</p>
              <p>Peso: {info.mass}</p>
              <p>Color de ojos: {info.eye_color}</p>
              <p>Color de pelo: {info.hair_color}</p>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
          <h3>Usuario: {login.currentUsername}</h3>
        </>
      ) : (
        <p>No tienes permiso para ver este contenido</p>
      )}
    </div>
  );
}

export default StarwarsInfo;
