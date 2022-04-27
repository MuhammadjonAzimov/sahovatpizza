import styled from "styled-components";

import logo from '../assets/logo.svg'
import bag from '../assets/bag.svg'
import fire from '../assets/fire.svg'
import pizza from '../assets/pizza_icon.svg'
import sushi from '../assets/sushi_icon.svg'
import drik from '../assets/drink_icon.svg'
import snack from '../assets/snacks_icon.svg'
import combo from '../assets/combo_icon.svg'
import dessert from '../assets/dessert_icon.svg'
import sauce from '../assets/sauce_icon.svg'
import { Link } from "react-router-dom";
// import { useState } from "react";

const Nav = () => {

    // const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bag")) || [])

    return (
        <Wrapper>
            <Header>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="" />
                    <span className="logo-container_text">Saxovat pizza</span>
                </div>
                <Link className="link" to={"/bag"}>
                    <div className="bag">
                        <img src={bag} alt="" />
                        <span className="bag-price">0 <span>so'm</span> </span>
                    </div>
                </Link>
            </Header>

            <Navigation>
                <div className="menu">
                    <a href="#aksiyalar" className="nav-box">
                        <img className="nav-box_icon" src={fire} alt="" />
                        <span className="nav-box_text">Aksiyalar</span>
                    </a>
                    <a href="#pizza" className="nav-box">
                        <img className="nav-box_icon" src={pizza} alt="" />
                        <span className="nav-box_text">Pizza</span>
                    </a>
                    <a href="#sushi" className="nav-box">
                        <img className="nav-box_icon" src={sushi} alt="" />
                        <span className="nav-box_text">Sushi</span>
                    </a>
                    <a href="#drinks" className="nav-box">
                        <img className="nav-box_icon" src={drik} alt="" />
                        <span className="nav-box_text">Ichimlik</span>
                    </a>
                    <a href="#snak" className="nav-box">
                        <img className="nav-box_icon" src={snack} alt="" />
                        <span className="nav-box_text">Snak</span>
                    </a>
                    <a href="#kombo" className="nav-box">
                        <img className="nav-box_icon" src={combo} alt="" />
                        <span className="nav-box_text">Kombo</span>
                    </a>
                    <a href="#dessert" className="nav-box">
                        <img className="nav-box_icon" src={dessert} alt="" />
                        <span className="nav-box_text">Dessert</span>
                    </a>
                    <a href="#sous" className="nav-box">
                        <img className="nav-box_icon" src={sauce} alt="" />
                        <span className="nav-box_text">Sous</span>
                    </a>
                </div>
            </Navigation>
        </Wrapper>
    );
}

export default Nav;

const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 123;
`;

const Navigation = styled.div`
    width: 100%;
    height: 110px;
    padding: 0 15%;
    user-select: none;
    background-color: #F9F9F9;

    @media  (max-width: 1000px) {
        height: 70px;
        padding: 0 6%;
    }
    
    .menu {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        @media  (max-width: 1000px) {
            gap: 10px;
            overflow-x: auto;

            ::-webkit-scrollbar {
                width: 0;
            }
        }
    }

    .nav-box {
        width: 100px;
        height: 90px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border: 1px solid #F0F0F0;
        border-radius: 12px;
        cursor: pointer;
        text-decoration: none;
        color: #191919;

        @media  (max-width: 1000px) {
            width: 100px;
            height: 40px;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 8px;
            padding: 4px 8px;
            gap: 2px;
        }

        :hover {
            .nav-box_text {
                color: #E23535;
            }
        }

        .nav-box_icon {
            width: 32px;
            height: 32px;

            @media  (max-width: 1000px) {
                width: 24px;
                height: 24px;
            }
        }

        .nav-box_text {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            @media  (max-width: 1000px) {
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
            }
        }
    }
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
            gap: 8px;
        }

        .logo {
            width: 32px;
            height: 32px;
        }

        .logo-container_text {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;

            @media  (max-width: 1000px) {
                font-size: 18px;
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
