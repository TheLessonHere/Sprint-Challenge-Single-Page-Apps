import React from 'react'
import { Icon } from 'semantic-ui-react';

export default function CharacterCard (props) {
  const { img, name, species, status, location, origin } = props;

  return (
    <div>
      <img src={img} alt='character image' />
      <h2>{name}</h2>
      <span>{species}</span>{" "}
      <span>{status}</span>
      <p>Location: {location}</p>
      <p>Origin: {origin}</p>
      <p><Icon name='user' />Episodes</p>
    </div>
  )
}
