import {axiosService} from "./axios.service";
import {API_KEY} from "../constants/api/api.key";
import {units} from "../constants/urls/urls";

const weatherService = {
    getWeatherMetric: (city) => axiosService.get(`weather?q=${city}&appid=${API_KEY}${units.metric}&lang=ua`),
    getWeatherImperial: (city) => axiosService.get(`weather?q=${city}&appid=${API_KEY}${units.imperial}&lang=ua`)
};

export {
    weatherService
}