import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import Sale from '../Components/Sale';

const Home = () => {
    return (
        <Wrapper>
            <Nav />
            <Sale />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    height: 8000px;
`;
