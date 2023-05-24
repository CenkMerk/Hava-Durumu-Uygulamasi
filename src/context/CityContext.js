import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

function Provider({ children }) {
  //şehirleri ve ilgili datalarını tutuyor.
  const [cities, setCities] = useState([]);
  //seçili şehrin bilgilerini tutuyor
  const [selectedCity, setSelectedCity] = useState([]);

  useEffect(() => {}, [cities]);

  //bu kısımda gelen şehir adına göre api ye istek atıyorum ve bir data geliyor.
  //Daha sonra cities stateinde bulunan değerleri createdCities adlı geçiçi diziye
  //aktariyorum ve sonuna da gelen datadan yeni bir şehir oluşturuyorum.
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
        //Seçili şehire gelen dataları aktarıyorum
      const SelectedCityData = [data.city.name, data.list];
      setSelectedCity(SelectedCityData);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };

  //seçili şehri güncelleme işlemini yapıyorum
  //gelen id değerini cities dizinde buluyorum ve selectedCity i güncelliyorum
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
