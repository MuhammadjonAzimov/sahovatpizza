import React from 'react';
import styled from 'styled-components';
import Sale from '../Components/Sale';
import Pizzas from './Pizzas';

const Home = () => {
    return (
        <Wrapper>
            <Sale />
            <Pizzas />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    height: 8000px;
    padding: 30px 15%;

    @media  (max-width: 1000px) {
        padding: 30px 6%;
    }
`;
