import React from 'react'
import CityCard from './CityCard'

export default function CityDisplayer(props) {
  const listCities = props.cities.map((city, index) => {
    return <CityCard key={index} name={city.name} image={city.image} />
  })

  return (
    <div>
      <h1 className="Header">Cities of Colorado</h1>
      <div className="CityDisplayer">
        {listCities}
      </div>
    </div>
  )
}
