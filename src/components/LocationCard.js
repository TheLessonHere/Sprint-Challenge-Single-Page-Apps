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
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props;
  
  return (
    <StyledCard>
    <h2>{name}</h2>
    <p>{type} - {dimension}</p>
    <div><Icon name='users' />Residents: {residents}</div>
    </StyledCard>
  )
}
