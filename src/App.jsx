import loader from './assets/loader.svg';
import {useEffect, useState} from "react";

const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setWeatherData({
                    city: data.data.city,
                    country: data.data.country,
                    temperature: data.data.current.weather.tp,
                    icon: data.data.current.weather.ic
                })
            })
    }, []);

    return (
        <main
            className="max-w-sm min-h-96 mt-24 mx-auto rounded-xl pt-8 px-2.5 bg-white text-black shadow-xl text-center relative">
            <div
                className={`bg-white absolute rounded-xl z-10 top-0 left-0 w-full h-full flex items-center justify-center opacity-0 invisible ${!weatherData && "!opacity-100 !visible"}`}>
                <img src={loader} alt="loader"/>
            </div>
            {weatherData && (
                <>
                    <p className="text-5xl font-sans text-[#333]">{weatherData.city}</p>
                    <p className="text-2xl mb-11 text-[#606060]">{weatherData.country}</p>
                    <p className="text-7xl font-semibold text-[#212121]">{weatherData.temperature}°C</p>

                    <div className="info-container">
                        <img src={`/icons/${weatherData.icon}.svg`} alt="weather icon"
                             className="object-cover w-32 h-32 mx-auto block"/>
                    </div>
                </>
            )}
        </main>
    )
}

export default App
