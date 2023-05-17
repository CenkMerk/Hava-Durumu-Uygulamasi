import React from "react";
import "../style/SehirListeleme.css";
import { useContext } from "react";
import CityContext from "../context/CityContext";
import { SehirBilgileri } from "./SehirBilgileri";
import Box from "@mui/material/Box";

export const SehirListeleme = () => {
  const { cities } = useContext(CityContext);
  return (
    <Box className="SehirListeleme">
      {cities.map((city, index) => {
        return <SehirBilgileri key={index} city={city} />;
      })}
    </Box>
  );
};
