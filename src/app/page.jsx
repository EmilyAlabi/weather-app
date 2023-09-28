'use client'

import Image from 'next/image'
import React,  { useState } from 'react'
import './globals.css'
const emily = {
  backgroundImage: "url('/images/skyboat.jpg')",
}

let city = 'Ikoyi'


export default function Home() {
  const [searchCity, setSearchCity] = useState('');
  const [status, setStatus] = useState(null);
  
  async function fetchWeather(city) {
    try{
      const response = await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec5e0c563de29dc7ae176f47afe3a0aa`, {cache: 'no-cache' }) ;

      const data = await response.json();
      setStatus(data);
    }
    catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  }


  function onSubmit(event){
    event.preventDefault();
    fetchWeather(searchCity); 
  }

    return (
      <section >
      <section className=' bg-red-500 flex items-center justify-center'>

      <section className='grid md:grid-cols-2 grid-cols-1 gap-x-[100px] items-center justify-center'>
        <form onSubmit={onSubmit} className= 'flex flex-col gap-3'>
          <input 
          type="text" 
          name="search" 
          id="search" 
          value={searchCity}
          className='p-5 rounded-[50px] outline: none' 
          placeholder="Enter Location"
          onChange={(e) => setSearchCity(e.target.value)}
          />
          <button type= "submit"
          className= "bg-orange-700 p-3 rounded-xl items-center justify-center">Search</button>
        </form>

        {status && (

        <div>
        <p>Location: {status.name}</p>
        <p>Weather: {status.weather[0].main}</p>
        {status.weather[0].main === Rain ? (
          <Image src='/status/rain.png'  width={100} height= {100} alt='rain'/>
        ) : status.weather[0].main === 'Clouds' ? (<Image src='/status/clouds.png' width={100} height={100} alt='cloud'/>
        ) : '' }
        
        <p>Description: {status.weather[0].description}</p>
        <p>Temperature: {(status.main.temp - 273.15).toFixed(0)} &#8451; </p>
        <p>Pressure: {(status.main.pressure / 0.75006).toFixed(0)} <abbr title="millimeter per mercury">mmHg</abbr></p>
        <p>Humidity: {(status.main.humidity).toFixed(0)} &#x25; </p>
        <p>Wind Speed: {(status.wind.speed * 2.23694).toFixed(0)} <abbr title="mile per hour">mph</abbr></p>
        </div>
        )}
      </section>
      </section>
      </section>
    ) ; 
  }


//   return (
//     <main>
//       <p></p>
//     {/* <div className='container'>
//       <div className='searchBar'/>
//         <input type='text' className='cityName' placeholder='Enter Location'></input>
//    </div>
//       <div className='temperature'> 25°C</div>
//       <div className='location'>Lagos</div>

//     <div className='dataContainer'>
//       <div className='data'>
//         <div className='humidity'>94%</div>
//         <div className='text'>Humidity</div>
//       </div>
//       <div className='data'>
//         <div className='windspeed'>6MPH</div>
//         <div className='text'>Wind Speed</div>
//       </div>

//     </div> */}
//    </main>
//   )
// } 
