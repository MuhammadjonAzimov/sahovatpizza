import styled from 'styled-components';

import Sale from '../Components/Sale';
import Drinks from './Drinks';
import Pizzas from './Pizzas';
import Combo from './Combo';
import Snacs from './Snacs';
import Sushies from './Sushies';
import Desserts from './Desserts';
import Sous from './Sous';
import Footer from './Footer';

const Home = () => {
    return (
        <Wrapper>
            <Sale />
            <Pizzas />
            <Sushies />
            <Drinks />
            <Snacs />
            <Combo />
            <Desserts />
            <Sous />
            <Footer />
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
