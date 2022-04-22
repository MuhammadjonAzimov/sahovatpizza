import styled from 'styled-components';

import Sale from '../Components/Sale';
import Drinks from './Drinks';
import Pizzas from './Pizzas';
import Sushies from './Sushies';

const Home = () => {
    return (
        <Wrapper>
            <Sale />
            <Pizzas />
            <Sushies />
            <Drinks />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 15%;

    @media  (max-width: 1000px) {
        padding: 30px 6%;
    }
`;
