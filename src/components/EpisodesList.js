import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([{"id":1,"name":"Pilot","air_date":"December 2, 2013","episode":"S01E01","characters":["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/175"]},
  {"id":2,"name":"Lawnmower Dog","air_date":"December 9, 2013","episode":"S01E02","characters":["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2"]}])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/episode/')
    .then((res) => {
      setEpisodes(res.data.results);  
    })
    .catch((err) => {
      console.log('Episode Data Not Available')
    })
  }, [])

  return (
  
  <section className='episode-list grid-view'>

    {episodes.map((episode => {
      return <EpisodeCard
      name={episode.name} 
      date={episode.air_date}
      seasontag={episode.episode}
      characters={episode.characters.length} />
    }))}

  </section>
  )
}