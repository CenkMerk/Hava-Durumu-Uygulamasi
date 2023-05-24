import React from "react";
import "../style/SehirOlusturma.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useContext } from "react";
import CityContext from "../context/CityContext";
import Paper from "@mui/material/Paper";

export const SehirOlusturma = () => {
  //context den getWeatherData çağırıyorum
  const { getWeatherData } = useContext(CityContext);
  //inputtaki değeri tutuyor
  const [city, setCity] = useState("");
  //input her değiştiğinde değeri city stateine gönderiyor
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  //arama butonuna tıklandığında getWeatherData metoduna inputtaki değeri gönderiyorum
  //inputun içini boşaltıyorum
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
    ".css-1iudku6": {
      color: "white",
    },
    ".css-mnn31": {
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
