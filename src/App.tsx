import React, { useState } from 'react'

import { notify } from './utils/notifications'
import Navbar from './components/common/Navbar'
import { fetchCars } from './utils/communauto'
import { Car } from './types/car'

function App() {
  const [cars, setCars] = useState<Car[]>([])

  const onHandleClick = async () => {
    // TODO : fetch datas
    try {
      const cars = await fetchCars();
      console.log(cars);
      setCars(cars);
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

  return (
    <React.Fragment>
      <Navbar />
      <div className='p-10 flex flex-col items-center justify-center'>
        {cars.map(car => <label key={car.plate}>{car.brand} {car.model}</label>)}
        <button onClick={onHandleClick}>Refresh</button>
      </div>
    </React.Fragment>
  )
}

export default App
