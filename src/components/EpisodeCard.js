import React from 'react'

export default function EpisodeCard (props) {
  const { name, date, seasontag, characters } = props;
  
  return (
    <div>
    <h2>{name}</h2>
    <p>{date}</p>
    <p>{seasontag}</p>
    <div>Characters: {characters}</div>
    </div>
  )
}