import { ajax } from "../tools/ajax";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather",
        params: {
            q: city,
            appid: "ce3b97c128dc7c83b355e2d8c7c80297",
            units: "metric"
        }
    };
    return await ajax(optionsRequest);
}
