import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';

const Home = () => {
    return (
        <Wrapper>
            <Nav />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
