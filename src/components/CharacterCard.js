import React from 'react'
import { Icon } from 'semantic-ui-react';
import styled from "styled-components";

const StyledCard = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid lightgrey;
    border-radius: 10px;
`;

const StyledImg = styled.img`
    border-radius: 10px 10px 0 0;
`;

const StyledSpan = styled.span`
    color: grey;
`;

const StyledTextContainer = styled.div`
    padding: 20px;
`;

const StyledP = styled.p`
    padding-bottom: 10px;
`;

const StyledP2 = styled.p`
    padding-left: 10px;
`;

const StyledDiv = styled.div`
    background-color: lightgrey;
    border-radius: 0 0 10px 10px;
`;

export default function CharacterCard (props) {
  const { img, name, species, status, location, origin, episodes} = props;

  return (
    <StyledCard>
      <StyledImg src={img} alt='character image' />
      <StyledTextContainer>
      <h2>{name}</h2>
      <StyledP>
      <StyledSpan>{species}</StyledSpan>{" "}
      <StyledSpan>{status}</StyledSpan>
      </StyledP>
      <p>Location: {location}</p>
      <p>Origin: {origin}</p>
      </StyledTextContainer>
      <StyledDiv>
      <StyledP2>
      <Icon name='video' />Episodes: {episodes}
      </StyledP2>
      </StyledDiv>
    </StyledCard>
  )
}
