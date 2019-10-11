import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

//****************STYLED-COMPONENTS**************************/

const BigContainer= styled.div`
    border:2px solid black;
    width: 80%;
    margin: 0 auto;
    display:flex;
    flex-wrap:wrap;
    // justify-content:center;
    justify-content: space-around;
    padding:3%;
    background: rgba(76, 89, 111, 0.3);
    margin-bottom: 5%;
`;

const MainContainer = () => {

    const [char, setChar] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people')
            .then((response) => {
                console.log(response)
                console.log(response.data.results);
        setChar(response.data.results);
        })
        .catch(error => {
        console.log('Error - No Data Returned from API: ', error);
        })
    },[])

    return (
        <BigContainer>
            {char.map(starChar => {
                return(
                    <CharacterCard
                        key={starChar.name}
                        name={starChar.name}
                        height = {starChar.height}
                        weight = {starChar.mass}
                        birthYear = {starChar.birth_year}
                        gender = {starChar.gender}
                        eyeColor = {starChar.eye_color}
                        skinColor = {starChar.skin_color}
                        hairColor = {starChar.hair_color}
                    />
                )
            })}
        </BigContainer>
    )   
}

export default MainContainer;

//******************NOTES******************* */

// Link to awesomeness: https://swapi.co/documentation#people
// http https://swapi.co/api/people

