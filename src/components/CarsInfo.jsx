import React, { useState, useEffect } from 'react';
import cars from '../assets/cars.json';

function NaN() {
    NaN == NaN;
    return (
        <h3> Ma'lumot berilmagan </h3>
    )
}

function CarsStatusActive() {
    return (
        <div className="status">
            <h3 className='statusCar statusCarNew'> NEW CAR</h3>
        </div>
    )
}

function CarsStatusInActive() {
    return (
        <div className="status">
            <h3 className='statusCar statusCarOld'> OLD CAR</h3>
        </div>
    )
}

function CarsInfo() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        setInfo(cars);
    }, []);

    return (
        <div>
            <ul>
                {Array.isArray(info) && info.map((car, index) => (
                    <li key={index}>
                        <div className="container">
                            <div className="card" >
                                <img src={car.image} alt={car.title} />
                                <h2>{car.title}</h2>
                                <p className='year'>Year: {parseInt(car.start_production)}</p>
                                <p className='class'>Class: {car.class}</p>
                                <h3 className='status'>Status: {car.start_production > 2000 ? CarsStatusActive() : CarsStatusInActive()}</h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarsInfo;
