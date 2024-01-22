import styles from './WeatherMainInfo.module.css';

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
          <div className={styles.condition}>{weather?.current.condition.text}</div>
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
    </div>
  );
};
