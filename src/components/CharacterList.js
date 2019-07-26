import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
{"id":2,"name":"Morty Smith","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      setCharacters(res.data.results);  
    })
    .catch((err) => {
      console.log('Character Data Not Available')
    })
  }, [])

  return (
  
  <section className='character-list grid-view'>

    {characters.map((character => {
      return <CharacterCard img={character.image} 
      name={character.name} 
      species={character.species}
      status={character.status}
      location={character.location.name}
      origin={character.origin.name} episodes={character.episode.length} />
    }))}

  </section>
  )
}
