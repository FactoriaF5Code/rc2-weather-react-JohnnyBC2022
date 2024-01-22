import { useEffect, useState } from "react";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";
import { Loading } from "./Loading";

import styles from './WeatherApp.module.css'

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    loadInfo();
  },[]);

  useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather])

  async function loadInfo(city = "Langreo") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${
          import.meta.env.VITE_APP_KEY
        }&q=${city}&lang=es`
      );

      const json = await request.json();
      console.log(json);
      setTimeout(() => {
        setWeather(json);
      }, 2000);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }
  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading/>}
    </div>
  );
};
