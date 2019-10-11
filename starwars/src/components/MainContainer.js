import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

//****************STYLED-COMPONENTS**************************/

const BigContainer= styled.div`
    border:2px solid black;
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
                    <CharacterCard></CharacterCard>
                )
            })}
        </BigContainer>
    )
           
  
}

export default MainContainer;

//******************NOTES******************* */

// Link to awesomeness: https://swapi.co/documentation#people
// http https://swapi.co/api/people

