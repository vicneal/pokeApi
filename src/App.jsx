import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import React, { useEffect, useState } from "react";
import { Main } from "./components/Main/Main.jsx";
import { Header } from "./components/Header/Header.jsx";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const pokemonList = response.data.results;

        const pokemonPromises = pokemonList.map((pokemon) =>
          axios.get(pokemon.url)
        );

        const pokemonResponses = await axios.all(pokemonPromises);

        const pokemonDetails = pokemonResponses.map(
          (response) => response.data
        );

        setData(pokemonDetails);
      } catch (error) {
        console.error("Error al obtener datos del pokemon:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main data={data} />
    </>
  );
}

export default App;
