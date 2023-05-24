import React from "react";
import "../style/SehirBilgileri.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import CityContext from "../context/CityContext";

export const SehirBilgileri = ({ city }) => {
  //bu kısımda şehrin id, hava durumunu ve adını datadan alıyorum.
  const { id, list, name } = city;
  //hava durumu datasından açıklama ve sıcaklık değerlerine ulaşıyorum
  const desc = list[0].weather[0].description;
  const temp = Math.floor(list[0].main.temp);
  
  const { SelectedCityById } = useContext(CityContext);
  //burada ise şehre tıklandığında context teki SelectedCityById metoduna şehrin id sini yolluyorum.
  const handleClick = () => {
    SelectedCityById(id);
  };

  return (
    <Paper
      elevation={24}
      className="SehirBilgileriComponentStyle animate__animated animate__fadeInLeft"
      onClick={handleClick}
      sx={{ background: "inherit" }}
    >
      <Box className="NameAndDescConteinerStyle">
        <Typography variant="h6" className="NameStyle">
          {name}
        </Typography>
        <Typography variant="subtitle2" textTransform="capitalize">
          {desc}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" className="TempStyle">
          {temp}℃
        </Typography>
      </Box>
    </Paper>
  );
};
