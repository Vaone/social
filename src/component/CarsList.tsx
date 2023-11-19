import React, {FC} from 'react';

type CarsListType = {
  topCars: CarType[]
}

type CarType = {
  manufacturer: string
  model: string
}

const CarsList: FC<CarsListType> = (props) => {
  return (
    <table>
        <tbody>
          <tr>
            {props.topCars.map((car, index)=>{
              return <td key={index}>{car.manufacturer}     {car.model}</td>
            })}
          </tr>
        </tbody>
      </table>
  )
};

export default CarsList;