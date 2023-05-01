import React from 'react';
import Header from "../components/header/Header";
import WeatherDescriptions from "./WeatherDescriptions";
import WeatherDataDescription from "../components/descriptions/WeatherDataDescription";



const MainLayout = () => {

    return (

        <div className={'main-layout'}>
            <Header />
            <WeatherDescriptions />
        </div>
    );
};

export default MainLayout;