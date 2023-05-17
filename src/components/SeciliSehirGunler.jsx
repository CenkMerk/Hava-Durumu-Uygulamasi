import React from "react";
import "../style/SeciliSehirGunler.css";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const SeciliSehirGunler = (list) => {
  const newList = list.list;
  const startDate = new Date(newList[0].dt_txt);
  const startDay = startDate.getDate();

  const [uniqueDays, setUniqueDays] = useState([]);

  useEffect(() => {
    const encounteredDays = new Set();
    const uniqueDaysArray = [];

    newList.forEach((item, index) => {
      const date = new Date(item.dt_txt);
      const day = date.getDate();
      const hours = date.getHours();

      if (!encounteredDays.has(day) && hours === 12) {
        encounteredDays.add(day);
        uniqueDaysArray.push({ index, day });
      }
    });

    setUniqueDays(uniqueDaysArray);
  }, []);

  return (
    <>
      {uniqueDays.slice(1, 5).map((item, index) => {
        if (item.day !== startDay) {
          return (
            <Paper
              elevation={24}
              key={index}
              className="SeciliSehirGunler"
              sx={{ background: "inherit", color: "white" }}
            >
              <Typography variant="h6">{item.day}</Typography>
              <img
                src={`http://openweathermap.org/img/w/${
                  newList[item.index].weather[0].icon
                }.png`}
                alt="icon"
              />
              <Typography variant="h5">
                {Math.floor(newList[item.index].main.temp)}℃
              </Typography>
            </Paper>
          );
        }
        return null;
      })}
    </>
  );
};
