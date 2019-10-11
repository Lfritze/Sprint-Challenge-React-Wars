import React from 'react';
import styled from 'styled-components';

const PersonCard = styled.div`
    border: 3px solid black;
    border-radius: 25px;
    display:flex;
    flex-direction: column;
    width: 25%;
    margin: 2% 0 2% 0;
    background: #b74609;
    opacity: 0.85;
    color: black;
    text-align:left;
    
`;

const PersonName = styled.h1`
    border-bottom: 3px solid black;
    display:flex;
    // align-items: left;
    justify-content: center;
    padding-bottom: 5%;
    text-shadow: 1px 1px 2px yellow;
    font-size: 2rem;
    letter-spacing: 5px;
    
`;

const Source = styled.span`
color: #000034;
text-shadow: 0.5px 0.5px 0.5px yellow;
`;

const CardInfo = styled.p`
    font-size: 1.7rem;
    padding:0 0 0 8%;
    letter-spacing: 3.5px;
    color: white;
    text-shadow:  1px 1px 4px black;
    margin: 0.5%;
`;    



const CharacterCard = (props) => {
    return (
        <PersonCard>
            <PersonName>{props.name}</PersonName>
            <CardInfo><Source>Height:</Source> {props.height} cm.</CardInfo>
            <CardInfo><Source>Weight:</Source> {props.weight} Kg.</CardInfo>
            <CardInfo><Source>Sex:</Source> {props.gender}</CardInfo>
            <CardInfo><Source>Born:</Source> {props.birthYear}</CardInfo>
            <CardInfo><Source>Eye Color:</Source> {props.eyeColor}</CardInfo>
            <CardInfo><Source>Skin Pigment: </Source> {props.skinColor}</CardInfo>
            <CardInfo><Source>Hair Color: </Source> {props.hairColor}</CardInfo>
        </PersonCard>
    )
}

export default CharacterCard;








