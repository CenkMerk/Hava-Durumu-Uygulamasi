import React from "react";
import "../style/ArkaPlan.css";
import { useContext, useEffect, useState } from "react";
import CityContext from "../context/CityContext";
import DayClear from "../img/DayClear.mp4";
import NightClear from "../img/NightClear.mp4";
import NightRain from "../img/NightRain.mp4";
import Clouds from "../img/clouds.mp4";
import Snow from "../img/snow.mp4";
import DayRain from "../img/DayRain.mp4";
import Normal from "../img/Normal.mp4";

export const ArkaPlan = () => {
  //bu kısmın amacı gece mi gündüz mü olduğunu anlamak
  const yerelZaman = new Date();
  const saat = yerelZaman.getHours();
  const sunState = saat >= 6 && saat < 20 ? true : false;

  //contextden seçilen şehrin datasını getirir
  const { selectedCity } = useContext(CityContext);

  //gelen data var ise json tipindeki veriden havanın durumunu gösteren veriyi çeker
  const WeatherData =
    selectedCity.length > 0 ? selectedCity[1][0].weather[0].main : null;

    //Burada seçilen şehrin havasında değişime göre sayfa render edilir.
    //gelen veriyi videoMapping e gönderir ordan gelen sonuca göre
    //arka plandaki videonun uzantısı değiştirilir
  useEffect(() => {
    if (WeatherData) {
      const videoPath = videoMapping[WeatherData];
      const videoElement = document.getElementById("background-video");
      videoElement.src = videoPath;
      console.log(videoPath);
    }
  }, [WeatherData]);

  //gelen dataya göre uygun arka planın uzantılarını gönderir
  const videoMapping = {
    Clear: sunState ? DayClear : NightClear,
    Clouds: Clouds,
    Snow: Snow,
    Rain: sunState ? DayRain : NightRain,
    null: Normal,
  };
  return (
    <video id="background-video" autoPlay muted loop>
      <source src={Normal} type="video/mp4" />
    </video>
  );
};
