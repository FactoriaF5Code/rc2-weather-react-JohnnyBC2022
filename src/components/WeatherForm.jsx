import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./WeatherForm.module.css";

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <div>
      <h2>Escribe una ciudad para saber el tiempo: </h2>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type="text" onChange={onChange} className={styles.input} />
      </form>
    </div>
  );
};

WeatherForm.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
};
