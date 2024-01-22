import styles from "./WeatherMainInfo.module.css";
import PropTypes from "prop-types";

export const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={styles.current}>{weather?.current.temp_c}º C</div>
        </div>
      </div>
      <div>
        <iframe
          title="map"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11624.74151822956!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${weather?.location.name}%2C%20${weather?.location.country}!2s${weather?.location.name}%2C%20${weather?.location.country}!5e0!3m2!1ses!2ses!4v1705944850673!5m2!1ses!2ses`}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.weatherAditional}>
        <h2>Información Adicional: </h2>
        <div className={styles.condition}>Sensación térmica:</div>
        <div className={styles.current}>{weather?.current.feelslike_c}º C</div>
        <div className={styles.condition}>Humedad relativa:</div>
        <div className={styles.current}>{weather?.current.humidity}%</div>
        <div className={styles.condition}>Velocidad del viento:</div>
        <div className={styles.current}>{weather?.current.wind_kph} km/h</div>
      </div>
    </div>
  );
};

WeatherMainInfo.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string,
      lon: PropTypes.number,
      lat: PropTypes.number,
    }),
    current: PropTypes.shape({
      condition: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      }),
      temp_c: PropTypes.number,
      feelslike_c: PropTypes.number,
      humidity: PropTypes.number,
      wind_kph: PropTypes.number,
    }),
  }),
};
