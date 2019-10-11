import React from 'react';
import styled from 'styled-components';

const PersonCard = styled.div`
    border: 3px solid black;
`;

const PersonTitle = styled.h1`
    border-bottom: 3px solid black;
`;

const CharacterCard = (props) => {
    return (
        <PersonCard>
            <PersonTitle></PersonTitle>
        </PersonCard>
    )
}

export default CharacterCard;








