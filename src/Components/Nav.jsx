import styled from "styled-components";
import logo from '../assets/logo.svg'
import bag from '../assets/bag.svg'

const Nav = () => {
    return (
        <Wrapper>
            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
                <span className="logo-container_text">Saxovat pizza</span>
            </div>
            <div className="navigation-container">
                <span className="navigation-container_text">Aksiyalar</span>
                <span className="navigation-container_text">Pizza</span>
                <span className="navigation-container_text">Sushi</span>
                <span className="navigation-container_text">Ichimlik</span>
                <span className="navigation-container_text">Dessert</span>
                <span className="navigation-container_text">Sous</span>
                <span className="navigation-container_text">Boshqa</span>
            </div>
            <div className="bag">
                <img src={bag} alt="" />
                <span className="bag-price">0 <span>so'm</span> </span>
            </div>
        </Wrapper>
    );
}

export default Nav;

const Wrapper = styled.div`
    width: 100%;
    height: 64px;
    padding: 0 15%;
    background-color: white;
    user-select: none;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;

        .logo {
            width: 32px;
            height: 32px;
        }

        .logo-container_text {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #191919;
        }
    }

    .navigation-container {
        display: flex;
        gap: 38px;

        .navigation-container_text {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #191919;
            cursor: pointer;
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

        .bag-price {
            font-weight: 400;
            font-size: 16px;
            color: white;
        }
    }
`;
