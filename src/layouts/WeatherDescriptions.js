import React, {useEffect} from 'react';

import {useAppReducer} from "../hooks/useAppReducer";
import {weatherService} from "../services/weather.service";
import WeatherDataDescription from "../components/descriptions/WeatherDataDescription";

const WeatherDescriptions = () => {

    const [{weatherData, trigger}, dispatch] = useAppReducer((state) => state.weathReducer);


    useEffect(() => {
        weatherService.getWeatherMetric('kiev', 'metric').then(value => value.data).then(value => dispatch({
            type: 'GET_WEATHER',
            payload: value
        }))
    }, [trigger, dispatch]);


    return (


        <div>
            {
                weatherData.name && (
                    <WeatherDataDescription weatherData={weatherData}/>
                )
            }
        </div>
    );
};

export default WeatherDescriptions;