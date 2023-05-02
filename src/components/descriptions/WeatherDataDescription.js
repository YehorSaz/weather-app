import React from 'react';
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const WeatherDataDescription = ({weatherData}) => {

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
                                <div className={'descriptions-left-inner text-descr'}>{description}</div>
                            </div>

                            <div className={'description-header-right'}>
                                <div className={'descriptions-right-inner'}>{temp.toFixed()} °C</div>
                            </div>

                        </div>

                        <div className={'descriptions-footer'}>

                            <div className={'footer-up'}>


                                <div className={'footer-inner'}>

                                    <div className={'icons'}>
                                        <BiHappy/>
                                        <small>вдчувається</small>
                                    </div>
                                    <h2>{feels_like.toFixed()} °С</h2>

                                </div>


                                <div className={'footer-inner'}>

                                    <div>
                                        <FaArrowDown/>
                                        <small>мін</small>
                                    </div>

                                    <h2>{temp_min.toFixed()} °С</h2>

                                </div>

                                <div className={'footer-inner'}>

                                    <div>
                                        <FaArrowUp/>
                                        <small>макс</small>
                                    </div>
                                    <h2>{temp_max.toFixed()} °С</h2>

                                </div>


                            </div>

                            <div className={'footer-down'}>

                                <div className={'footer-inner'}>

                                    <div><MdCompress/>
                                        <small>тиск</small>
                                    </div>

                                    <h2>{(pressure * 0.75).toFixed()} мм</h2>
                                </div>
                                

                                <div className={'footer-inner'}>

                                    <div>
                                        <MdOutlineWaterDrop/>
                                        <small>вологість</small>
                                    </div>

                                    <h2>{humidity} %</h2>

                                </div>
                                

                                <div className={'footer-inner'}>
                                    
                                    <div>
                                        <FaWind/>
                                        <small>вітер</small>
                                    </div>
                                    
                                    <h2>{speed.toFixed()} м/сек</h2>
                                    
                                </div>

                                
                            </div>

                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default WeatherDataDescription;