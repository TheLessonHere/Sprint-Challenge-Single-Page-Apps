import React from 'react'

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props;
  
  return (
    <div>
    <h2>{name}</h2>
    <p>{type} - {dimension}</p>
    <div>Residents: {residents}</div>
    </div>
  )
}
