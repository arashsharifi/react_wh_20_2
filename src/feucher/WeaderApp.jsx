import React from "react";
import { LuSunMedium } from "react-icons/lu";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { BsCloudRain } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { TbTemperatureCelsius } from "react-icons/tb";

import pic from "../image/bg.png";
function WeaderApp() {
  return (
    <>
      <LuSunMedium className=" text-2xl" />
      <IoPartlySunnyOutline />
      <BsCloudRain />
      <TfiLocationPin />
      <div className="flex h-[80vh] items-center w-[65%] justify-center">
        <div className="relative h-[80vh] flex items-center">
          <img className="w-[400px]" src={pic} alt="nooot" />
          <h1 className="absolute top-28 text-white text-5xl left-8 font-bold">
            Tuesday
          </h1>
          <p className="absolute top-44 text-white text-2xl left-10">
            20 jun 2022
          </p>
          <div className="flex gap-2 absolute top-56 text-white text-2xl left-12">
            <TfiLocationPin className="text-white" />
            <p className="mb-2">Biarritz fr</p>
          </div>
          <div className="absolute  top-[440px] left-8 flex flex-col gap-1 text-3xl font-bold myfont text-white  ">
            <LuSunMedium className="text-white text-[60px] self-center" />
            <p className="flex">
              29
              <TbTemperatureCelsius />
            </p>
            <p>sunny</p>
          </div>
        </div>
        <div className="bg-slate-800 h-[48vh]  flex flex-col gap-4 w-[45%] items-center p-4 font-bold myfonttext rounded-r-lg">
          <div className="w-[98%] flex flex-col gap-2 mt-4 text-white text-2xl">
            <div className="flex justify-between">
              <p>PRECIPITATION</p>
              <p>0%</p>
            </div>
            <div className="flex justify-between">
              <p>HUMIDITY</p>
              <p>42%</p>
            </div>
            <div className="flex justify-between">
              <p>WIND</p>
              <p>3km/h</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="flex flex-col gap-2 items-center bg-white rounded-lg p-4 text-2xl">
              <LuSunMedium className="text-slate-900 text-[60px]" />
              <p className="text-slate-900">Tue</p>
              <p className="flex">
                30
                <TbTemperatureCelsius />
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center bg-gray-900 rounded-lg p-4 text-white text-2xl">
              <IoPartlySunnyOutline className="text-[60px]" />
              <p className="text-white">Wen</p>
              <p className="flex">
                30
                <TbTemperatureCelsius />
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center bg-gray-900 rounded-lg p-4 text-white text-2xl">
              <BsCloudRain className="text-[60px]" />
              <p className="text-white">Tue</p>
              <p className="flex">
                30
                <TbTemperatureCelsius />
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center bg-gray-900 rounded-lg p-4 text-white text-2xl">
              <LuSunMedium className="text-[60px]" />
              <p className="text-white">Fry</p>
              <p className="flex">
                30
                <TbTemperatureCelsius />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeaderApp;
