import React from "react";
import "../style/SeciliSehirSaatlik.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const SeciliSehirSaatlik = (item) => {
  //bu kısımda json tipindeki datadan bana lazım olan
  //saat, sıcaklık, ikonun kodunu alıyorum.
  const date = new Date(item.item.dt_txt);
  const timeString = date.toLocaleTimeString();
  const hour = `${timeString[0]}${timeString[1]}`;
  const temp = Math.floor(item.item.main.temp);
  const iconCode = item.item.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <Paper
      elevation={24}
      className="SeciliSehirSaatlikStyle"
      sx={{ background: "inherit", color: "white" }}
    >
      <Typography variant="h6">{hour}</Typography>
      <img src={iconUrl} alt="icon" />
      <Typography variant="h5">{temp}℃</Typography>
    </Paper>
  );
};
