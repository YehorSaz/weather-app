import React from 'react';



const WeatherDataDescription = ({weatherData}) => {
    console.log('-------------');
    console.log(weatherData);
    const makeIconURL = (iconId) =>
        `https://openweathermap.org/img/wn/${iconId}@2x.png`;

    const {
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        sys: {country},
        name,
    } = weatherData;

    const {description, icon} = weather[0];

    return (
        <div>
            {
                weatherData && (
                    <div className={'description-wrapper'}>

                        <div className={'description-header'}>

                            <div className={'description-header-left'}>
                                <div className={'descriptions-left-inner name'}>{name}, {country}</div>
                                <div className={'descriptions-left-inner icon'}>
                                    <img src={makeIconURL(icon)} alt="weatherIcon"/>
                                </div>
                                <div className={'descriptions-left-inner'}>{description}</div>
                            </div>
                            <div className={'description-header-right'}>{temp.toFixed()} °C</div>

                        </div>

                        <div className={'descriptions-footer'}>

                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default WeatherDataDescription;