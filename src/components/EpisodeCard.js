import React from 'react'
import styled from "styled-components";
import { Icon } from 'semantic-ui-react';

const StyledCard = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    width: 400px;
`;

export default function EpisodeCard (props) {
  const { name, date, seasontag, characters } = props;
  
  return (
    <StyledCard>
    <h2>{name}</h2>
    <p>{date}</p>
    <p>{seasontag}</p>
    <div><Icon name='user' />Characters: {characters}</div>
    </StyledCard>
  )
}