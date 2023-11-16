import React from "react";
import { LuSunMedium } from "react-icons/lu";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { BsCloudRain } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { TbTemperatureCelsius } from "react-icons/tb";

function WeatherCondition({ temp, humidity, city }) {
  return (
    <div className="absolute  top-[440px] left-8 flex flex-col gap-1 text-3xl font-bold myfont text-white  ">
      {humidity < 30 && humidity > 0 ? (
        <LuSunMedium className="text-white text-[60px] self-start " />
      ) : humidity < 60 && humidity > 30 ? (
        <BsCloudRain className="text-white text-[60px] self-start " />
      ) : humidity < 100 && humidity > 60 ? (
        <BsCloudRain className="text-white text-[60px]  self-start" />
      ) : (
        "nun"
      )}
      <p className="flex">
        {(temp - 273).toFixed()}
        <TbTemperatureCelsius />
      </p>
      <p>
        {humidity < 30 && humidity > 0
          ? "sunny"
          : humidity < 60 && humidity > 30
          ? "cloudy"
          : humidity < 100 && humidity > 60
          ? "heavy raining"
          : "nun"}
      </p>
    </div>
  );
}
// heavy raining
//Cloudy
//Sunny
export default WeatherCondition;
