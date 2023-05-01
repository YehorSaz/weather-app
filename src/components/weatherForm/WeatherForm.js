import React from 'react';


import {useForm} from "react-hook-form";
import {weatherService} from "../../services/weather.service";

import {useAppReducer} from "../../hooks/useAppReducer";



const WeatherForm = () => {

    const [, dispatch] = useAppReducer((state) => state.weathReducer);


    const {reset, register, handleSubmit} = useForm();


    // useEffect(() => {
    //     if (!trigger) {
    //         weatherService.getWeatherMetric('kiev', 'metric').then(value => value.data).then(value => dispatch({type: 'GET_WEATHER', payload: value}))
    //     }
    // }, [trigger]);


    const getWeatherData = async ({city}) => {
        const data = await weatherService.getWeatherMetric(city, 'metric');
        dispatch({type: 'GET_WEATHER', payload: data.data})
        reset();
    };

    // if (weatherData) {
    //     dispatch({type: 'GET_WEATHER', payload: weatherData})
    // }

    return (
        <div className={'form-wrapper'}>
            <form onSubmit={handleSubmit(getWeatherData)}>
                <input type="text" placeholder={'місто...'} {...register('city')} />
                <button>показати</button>
            </form>
            {/*<div>*/}
            {/*    {*/}
            {/*        weatherData && (*/}
            {/*            <WeatherDescriptions weatherData={weatherData} />*/}
            {/*        )*/}

            {/*    }*/}
            {/*</div>*/}
        </div>
    );
};


export default WeatherForm;