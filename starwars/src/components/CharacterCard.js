import React from 'react';
import styled from 'styled-components';

const PersonCard = styled.div`
    border: 3px solid black;
    display:flex;
    flex-direction: column;
    width: 20%;
    margin: 2% 0 2% 0;
    background: #b74609;
    opacity: 0.8
    color: black;
    text-align:left;
`;

const PersonName = styled.h1`
    border-bottom: 3px solid black;
    display:flex;
    align-items: left;
    justify-content: center;
    padding-bottom: 5%;
    text-shadow: 1px 1px 2px red;
    font-size: 2rem;
    letter-spacing: 5px;
`;

const CardInfo = styled.p`
    font-size: 1.5rem;
    padding:0 0 0 8%;
    letter-spacing: 2px;
    color: white;
    display: flex;
    text-align: left;
    margin: 0.5%;

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








