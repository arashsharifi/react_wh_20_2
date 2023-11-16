import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./ui/Search";
import WeaderApp from "./feucher/WeaderApp";
// import { GetCityWeather } from "./api/GetCityWeather";
// baku
// luanda
//berlin
function App() {
  const [sueech, setSueech] = useState(false);
  const [input, setInput] = useState("tehran");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [city, setCity] = useState("");
  const [speed, setSpeed] = useState("");
  if (sueech === true) {
    console.log("yes it is");
  } else {
    console.log("no it isent");
  }
  useEffect(() => {
    async function GetCityWeather(value) {
      try {
        //MYAPI

        const apiKey = "db015bf8f35452843f3e6dc34c15d536";
        const getUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;

        const response = await axios.get(getUrl);
        setTemp(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setSpeed(response.data.wind.speed);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    GetCityWeather(input);
  }, []);

  return (
    <div className="bg-slate-700  flex flex-col items-center h-[100vh]  ">
      <Search setInput={setInput} setSueech={setSueech} />
      <WeaderApp temp={temp} humidity={humidity} city={city} speed={speed} />
    </div>
  );
}

export default App;
