import axios from "axios";
import React, { useEffect, useState } from 'react';
import './App.css';
import City from './components/City';

function App() {
  const key = "84a91b51124f2bc14e2104a40efa11c9";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search])
  console.log(search);
  return (
    <div className="App w-full bg-background h-screen flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 rounded-lg border-2 w-96 p-2 mb-1">
        <div className="mb-4 mx-auto text-white text-4xl font-bold">Weather Condition</div>
        <input onChange={(event) => setSearch(event.target.value)} type="text" className="rounded w-56 p-1 text-white text-center font-light bg-transparent border-2 focus:outline-sky-400 placeholder:text-white focus:placeholder:text-transparent" placeholder="search city "></input>
      </div>
      {city && <City city={city} />}
    </div>
  );
}

export default App;
