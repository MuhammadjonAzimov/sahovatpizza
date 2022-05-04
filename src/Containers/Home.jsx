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
import Nav from '../Components/Nav';

const Home = ({ addtobag, bag, }) => {
    return (
        <div>
            <Wrapper>
                <Nav bag={bag} />
                <Sale />
                <Pizzas addtobag={addtobag} />
                <Sushies addtobag={addtobag} />
                <Drinks addtobag={addtobag} />
                <Snacs addtobag={addtobag} />
                <Combo addtobag={addtobag} />
                <Desserts addtobag={addtobag} />
                <Sous addtobag={addtobag} />
            </Wrapper>
            <Footer />
        </div>
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
