import React from "react";
import "../style/SeciliSehirGunler.css";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const SeciliSehirGunler = (list) => {
  //gelen jsontipindeki datadan uygun kısmı alıyorum
  const newList = list.list;
  //bu kısımda bugünün tarihini öğreniyorum
  const startDate = new Date(newList[0].dt_txt);
  const startDay = startDate.getDate();

  //bu state günlük hava tahminlerini tutuyor.
  const [uniqueDays, setUniqueDays] = useState([]);

  //gelen json tipindeki datada 5 gün için her 3 saatte bir hava durumu bilgisini
  //0,2,3,4...39 indisli diziye aktarmış.
  //bu diziden ben bundan sonraki 4 günün saat öğlen 12 deki hava durumunu almak istiyorum
  //bundan dolayı Set() yapısını kullandım çünkü aynı gün içinde diğer saatleri değil sadece 
  //12 deki hava durumu bilgisini istiyordum.
  useEffect(() => {
    const encounteredDays = new Set();
    const uniqueDaysArray = [];

    newList.forEach((item, index) => {
      //bu kısımda hangi gün ve hangi saat olduğunu buluyoruz
      const date = new Date(item.dt_txt);
      const day = date.getDate();
      const hours = date.getHours();
      //bu kısımda ise eğer o gün Set() de yok ve saat 12 ise günleri ve saatleri tutan dizime 
      //ekleme yapıyorum. 
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
