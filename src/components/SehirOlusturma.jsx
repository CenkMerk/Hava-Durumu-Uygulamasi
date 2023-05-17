import React from "react";
import "../style/SehirOlusturma.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useContext } from "react";
import CityContext from "../context/CityContext";
import Paper from "@mui/material/Paper";

export const SehirOlusturma = () => {
  const { getWeatherData } = useContext(CityContext);

  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = () => {
    getWeatherData(city);
    setCity("");
  };

  const TextFieldSearchStyle = {
    ".css-1teokgg-MuiFormLabel-root-MuiInputLabel-root": {
      color: "white",
    },
    ".css-1csjop0-MuiInputBase-root-MuiInput-root:before": {
      borderColor: "white",
    },
    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      color: "white",
    },
  };

  return (
    <Paper
      elevation={24}
      className="SehirOlusturmaStyle"
      component="form"
      sx={{ background: "inherit" }}
    >
      <TextField
        fullWidth
        label="Şehir Arayınız.."
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={city}
        variant="standard"
        sx={TextFieldSearchStyle}
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Ara
      </Button>
    </Paper>
  );
};
