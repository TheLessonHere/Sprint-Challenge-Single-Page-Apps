import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([{"id":1,"name":"Earth (C-137)","type":"Planet","dimension":"Dimension C-137","residents":["https://rickandmortyapi.com/api/character/83","https://rickandmortyapi.com/api/character/92","https://rickandmortyapi.com/api/character/112","https://rickandmortyapi.com/api/character/114","https://rickandmortyapi.com/api/character/116","https://rickandmortyapi.com/api/character/117","https://rickandmortyapi.com/api/character/120","https://rickandmortyapi.com/api/character/127","https://rickandmortyapi.com/api/character/155","https://rickandmortyapi.com/api/character/169","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/179","https://rickandmortyapi.com/api/character/186","https://rickandmortyapi.com/api/character/201","https://rickandmortyapi.com/api/character/216","https://rickandmortyapi.com/api/character/239"], "url":"https://rickandmortyapi.com/api/location/1","created":"2017-11-10T12:42:04.162Z"},
  {"id":2,"name":"Abadango","type":"Cluster","dimension":"unknown","residents":["https://rickandmortyapi.com/api/character/6"],"url":"https://rickandmortyapi.com/api/location/2","created":"2017-11-10T13:06:38.182Z"}])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/location/')
    .then((res) => {
      setLocations(res.data.results);  
    })
    .catch((err) => {
      console.log('Location Data Not Available')
    })
  }, [])

  return (
  
  <section className='location-list grid-view'>

    {locations.map((location => {
      return <LocationCard
      name={location.name} 
      type={location.type}
      dimension={location.dimension}
      residents={location.residents.length} />
    }))}

  </section>
  )
}