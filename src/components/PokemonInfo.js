import React from "react";
import useFetch from "../hooks/useFetch";
import { ThemeContext } from "../App";
import { LoginContext } from "../App";

const PokemonInfo = () => {

  const login = React.useContext(LoginContext);
  const theme = React.useContext(ThemeContext);

  const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const [info] = useFetch(API_URL);

  

  return (
    <div style={{ background: theme.background, color: theme.fontColor }}>
      {login.currentUsername ? (
        <>
          <p>Información de Pikachu:</p>
          {info ?
            <div>
              <p>Tema actual: {theme.name}</p>
              <p>Nombre: {info.name}</p>
              <p>Altura: {info.height}</p>
              <p>Peso: {info.weight}</p>
              <img alt="Imagen de pikachu" src={info.sprites.front_default} />
            </div>
            : <p>Cargando...</p>
          }
        </>
        ) : (
          <p>No tienes permiso para ver este contenido</p>
        )}

    </div>
  );
}

export default PokemonInfo;
