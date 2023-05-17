import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

function Provider({ children }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  useEffect(() => {}, [cities]);

  const getWeatherData = async (city) => {
    const key = "2a0f3eddf613eab28e55ccbccaf7f047";
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=${lang}&units=metric`
      );
      const createdCities = [
        ...cities,
        {
          id: Math.round(Math.random() * 999999),
          name: data.city.name,
          list: data.list,
        },
      ];
      setCities(createdCities);
      const SelectedCityData = [data.city.name, data.list];
      setSelectedCity(SelectedCityData);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };

  const SelectedCityById = (id) => {
    cities.filter((cities) => {
      if (cities.id === id) {
        const SelectedCityData = [cities.name, cities.list];
        return setSelectedCity(SelectedCityData);
      }
    });
  };

  const sharedValuesAndMethods = {
    cities,
    getWeatherData,
    SelectedCityById,
    selectedCity
  };
  return (
    <CityContext.Provider value={sharedValuesAndMethods}>
      {children}
    </CityContext.Provider>
  );
}
export { Provider };
export default CityContext;
