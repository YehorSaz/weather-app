import React from 'react';
import {useForm} from "react-hook-form";


import {weatherService} from "../../services/weather.service";
import {useAppReducer} from "../../hooks/useAppReducer";

const WeatherForm = () => {

    const [, dispatch] = useAppReducer((state) => state.weathReducer);
    const {reset, register, handleSubmit} = useForm();

    const getWeatherData = async ({city}) => {
        const data = await weatherService.getWeatherMetric(city, 'metric');
        dispatch({type: 'GET_WEATHER', payload: data.data})
        reset();
    };


    return (

        <div className={'form-wrapper'}>

            <form onSubmit={handleSubmit(getWeatherData)} className={'form'}>
                <input type="text" placeholder={'місто...'} {...register('city')} className={'input'}/>
                <button className={'button'}>показати</button>
            </form>

        </div>
    );
};


export default WeatherForm;