import React from 'react';

import Header from "../components/header/Header";
import WeatherDescriptions from "./WeatherDescriptions";
import {parallaxEffect} from "../parallax/parallax";



const MainLayout = () => {

    window.onload = () => {
        parallaxEffect()
    }



    return (

        <div className={'main-layout'}>

            <div className={'container'}><Header/>
                <WeatherDescriptions/>
            </div>


            <div className={'background-images images-background'}>

                <div className={'background-item'}>
                    <div className={'background-item_clouds'}></div>
                </div>

                <div className={'background-item'}>
                    <div className={'background-item_mountains'}></div>
                </div>

                <div className={'background-item'}>
                    <div className={'background-item_human'}></div>
                </div>


            </div>

        </div>
    );
};

export default MainLayout;