import { useEffect, useState } from "react";

import { getCountries } from "./services/countries";
import { getCities } from "./services/cities";
import { getCityWeather } from "./services/weather";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      const fetchedCountries = await getCountries();
      const sortedCountries = [...fetchedCountries].sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });

      setCountries(sortedCountries);
    })();
  }, []);

  const countryHandler = async (e) => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null);
  };

  const cityHandler = async (e) =>
    e.currentTarget.value &&
    setWeather(await getCityWeather(e.currentTarget.value));

  return (
    <>
      <div>
        <label>Selecciona un país: </label>
        <select onChange={countryHandler}>
          <option value="">Selecciona</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>

      {cities.length > 0 && (
        <div>
          <label>Elige una ciudad: </label>
          <select onChange={cityHandler}>
            <option value="">Selecciona</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <hr />
      {weather && (
        <div>
          <h2>Actual temperature: {weather.main.temp} C</h2>
          <p>Min: {weather.main.temp_min} C</p>
          <p>Max: {weather.main.temp_max} C</p>
          <pre>{JSON.stringify(weather, null, 2)}</pre>
        </div>
      )}
    </>
  );
}
