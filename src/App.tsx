import React, { useMemo, useState } from 'react'

import { notify } from './utils/notifications'
import Navbar from './components/common/Navbar'
import { fetchCars } from './utils/communauto'
import { Car } from './types/car'
import RadiusSelector from './components/common/RadiusSelector'
import calculateDistance from './utils/distance'
import Button from './components/ui/Button'


// 5011-5099 Lanaudiere St, Montreal, QC H2J 3P9, Canada
const lat = 45.533339;
const long = -73.583613;

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [radius, setRadius] = useState(1);

  const onHandleClick = async () => {
    try {
      const cars = await fetchCars();
      console.log(cars);
      setCars(cars.map(car => ({ ...car, distance: calculateDistance(lat, long, car.lat, car.lng) })));
      notify(
        'example',
        {
          type: 'basic',
          title: 'Example notification',
          message: 'This is an example notification',
        }
      )
    } catch (error) {
      console.error(error);
    }
  }

  const filteredCars = useMemo(() =>
    cars.filter(car => car.distance <= radius)
    .sort((a, b) => a.distance - b.distance)
  , [ cars, radius ]);

  return (
    <React.Fragment>
      <Navbar />
      <div className='p-10 flex flex-col items-center justify-center gap-4 bg-blue-300'>
        <RadiusSelector radius={radius} setRadius={setRadius} />

        <Button onClick={onHandleClick}>Refresh</Button>
        <h3>Total ({cars.length})</h3>
        <h3>Total filtered ({filteredCars.length})</h3>
        {cars.map(car => <div key={car.plate} className='flex items-center justify-center gap-4 p-2'>
          <label>{car.brand} {car.model}</label>
          <span>{car.plate}</span>
          <span>{car.lat}, {car.lng}</span>
          <span>{car.distance.toFixed(2)} km</span>
        </div>)}
      </div>
    </React.Fragment>
  )
}

export default App
