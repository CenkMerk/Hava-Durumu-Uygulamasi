import React from "react";
import "../style/SeciliSehir.css";
import { useContext, useEffect } from "react";
import CityContext from "../context/CityContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { SeciliSehirSaatlik } from "./SeciliSehirSaatlik";
import { SeciliSehirGunler } from "./SeciliSehirGunler";

export const SeciliSehir = () => {
  const { selectedCity } = useContext(CityContext);

  const city = selectedCity.length > 0 ? selectedCity[0] : "";
  const temp =
    selectedCity.length > 0 ? Math.floor(selectedCity[1][0].main.temp) : "";
  const desc =
    selectedCity.length > 0 ? selectedCity[1][0].weather[0].description : "";
  const list = selectedCity.length > 0 ? selectedCity[1] : [];

  useEffect(() => {}, [city]);

  return (
    <>
      {selectedCity.length > 0 ? (
        <Box className=" SeciliSehirConteinerStyle animate__animated animate__fadeInRight">
          <Box className="CityAndHoursConteinerStyle">
            <Paper
              elevation={24}
              sx={{ background: "inherit", color: "white" }}
              className="CityPaperStyle"
            >
              <Typography variant="h3">{city}</Typography>
              <Typography variant="h3">{temp}℃</Typography>
              <Typography variant="h4" textTransform="capitalize" textAlign="center">
                {desc}
              </Typography>
            </Paper>
            <Box sx={{ width: "100%" }}>
              <Typography variant="subtitle2" color="white" textAlign="center">
                3 Saat Arayla Hava Tahminleri
              </Typography>
              <Box className="HoursConteinerStyle">
                {list.slice(1, 6).map((item, index) => {
                  return <SeciliSehirSaatlik key={index} item={item} />;
                })}
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <Typography variant="subtitle2" color="white" textAlign="center">
              Günlük Hava Tahminleri
            </Typography>
            <Box className="DaysConteinerStyle">
              <SeciliSehirGunler list={list} />
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
