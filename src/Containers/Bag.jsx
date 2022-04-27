import { Link } from 'react-router-dom';
import styled from 'styled-components';

import bag from '../assets/bag.svg'
import logo from '../assets/logo.svg'
import vektor from '../assets/vektor.svg'

const Bag = () => {
    return (
        <Wrapper>
            <Header>
                <Link className='link' to={"/"}>
                    <div className="logo-container">
                        <img className='vektor' src={vektor} alt="" />
                        <img className="logo" src={logo} alt="" />
                        <span className="logo-container_text">Saxovat pizza</span>
                    </div>
                </Link>

                <div className="bag">
                    <img src={bag} alt="" />
                    <span className="bag-price">Buyurtma berish</span>
                </div>

            </Header>
        </Wrapper>
    );
}

export default Bag;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const Header = styled.div`
    width: 100%;
    height: 64px;
    padding: 0 15%;
    background-color: white;
    user-select: none;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media  (max-width: 1000px) {
        padding: 0 6%;
    }

    .link {
        text-decoration: none;
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;

        @media  (max-width: 1000px) {
            gap: 6px;
        }

        .logo {
            width: 32px;
            height: 32px;

            @media  (max-width: 1000px) {
                width: 28px;
                height: 28px;
            }
        }

        .logo-container_text {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #191919;

            @media  (max-width: 1000px) {
                font-size: 16px;
                font-weight: 600;
                line-height: 22px;
            }
        }
    }

    .bag {
        height: 40px;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        gap: 8px;

        background: #FF7010;
        border-radius: 4px;
        cursor: pointer;

        @media  (max-width: 1000px) {
            padding: 6px 12px;
            gap: 4px;
        }

        .bag-price {
            font-weight: 400;
            font-size: 16px;
            color: white;

            @media  (max-width: 1000px) {
                font-size: 12px;
            }
        }
    }
`;
