import React from "react";
import { LuSunMedium } from "react-icons/lu";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { BsCloudRain } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { TbTemperatureCelsius } from "react-icons/tb";
function WeatherCondition2({ humidity, temp, dayName }) {
  console.log(humidity);
  const str = dayName.slice(0, 3);
  console.log(str);

  return (
    <div className="flex flex-col gap-2 items-center bg-white rounded-lg p-4 text-2xl">
      {humidity < 30 && humidity > 0 ? (
        <LuSunMedium className="text-slate-900 text-[60px] self-start " />
      ) : humidity < 60 && humidity > 30 ? (
        <BsCloudRain className="text-slate-900 text-[60px] self-start " />
      ) : humidity < 100 && humidity > 60 ? (
        <BsCloudRain className="text-slate-900 text-[60px]  self-start" />
      ) : (
        "nun"
      )}
      <p className="text-slate-900">{str}</p>
      <p className="flex">
        {(temp - 273).toFixed()}
        <TbTemperatureCelsius />
      </p>
    </div>
  );
}

export default WeatherCondition2;
