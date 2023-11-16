import axios from "axios";

export async function GetCityWeather({ city }) {
  try {
    //MYAPI

    const apiKey = "db015bf8f35452843f3e6dc34c15d536";
    const getUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(getUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
