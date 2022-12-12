import React from 'react';

const City = ({ city }) => {
    console.log(city);
    let iconSrc=`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
    return (
        <div>
            <div className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 max-w-lg w-96 p-2 pb-4 rounded-lg border-2">
                <div className="flex justify-between space-x-8">
                    <span className="flex flex-col items-center">
                        <img src={`${iconSrc}`} className="align-middle w-32" />
                    </span>
                    <span className="font-bold align-middle text-white text-8xl">
                        <h1>{city.main.temp.toFixed(0)}C°</h1>
                    </span>
                </div>
                <h1 className="text-2xl font-bold text-white align-middle">{city.name}</h1>
            </div>
        </div>
    )
}

export default City