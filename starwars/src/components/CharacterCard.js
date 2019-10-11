import React from 'react';
import styled from 'styled-components';

const PersonCard = styled.div`
    border: 3px solid black;
`;

const PersonName = styled.h1`
    border-bottom: 3px solid black;
`;

const PersonTitle = styled.h1`
    border-bottom: 3px solid black;
    `;

const CardInfo = styled.p`
font-size: 1.5rem;
`;    

const CharacterCard = (props) => {
    return (
        <PersonCard>
            <PersonName>{props.name}</PersonName>
            <CardInfo>Height:  {props.height} Centimeters</CardInfo>
            <CardInfo>Weight:  {props.weight} Kilograms</CardInfo>
            <CardInfo>Sex:  {props.gender}</CardInfo>
            <CardInfo>Born:  {props.birthYear}</CardInfo>
            <CardInfo>Eye Color:  {props.eyeColor}</CardInfo>
            <CardInfo>Skin Pigment:  {props.skinColor}</CardInfo>
            <CardInfo>Hair Color:  {props.hairColor}</CardInfo>
        </PersonCard>
    )
}

export default CharacterCard;








