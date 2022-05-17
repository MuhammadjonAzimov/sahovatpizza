import { Link } from "react-router-dom";
import styled from "styled-components";
import exit from '../assets/exit.svg'

const Authorization = () => {
    return (
        <Wrapper>
            <div className="container">
                <Link to={"/bag"}>
                    <img className="exit" src={exit} alt="" />
                </Link>
                <h3 className="title">Вход в аккаунт</h3>
                <p className="description">Сможете быстро оформлять заказы, <br /> использовать бонусы</p>
                <div className="input-container"><input className="input" type="text" placeholder="telefon raqam" /></div>
                <button className="btn">Zakaz</button>
                <span className="titr" >Продолжая, вы соглашаетесь со сбором и <br /> обработкой персональных данных и <br /> пользовательским соглашением</span>
            </div>
        </Wrapper>
    );
}

export default Authorization;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(25, 25, 25, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;

    .container {
        padding: 60px 260px;
        background: #F9F9F9;
        border-radius: 24px;
        position: relative;
        text-align: center;

        @media  (max-width: 1000px) {
            padding: 0;
            background: none;
        }

        .title {
            font-weight: 600;
            font-size: 32px;
            line-height: 40px;
        }

        .description {
            margin-top: 16px;
            margin-bottom: 22px;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
        }

        .input-container {
            width: 100%;
            display: flex;
            justify-content: center;

            .input {
                padding: 10px 13px;
                width: 320px;
                height: 48px;
                display: block;
                font-size: 18px;
                border: 1px solid #F0F0F0;
                border-radius: 6px;
            }
        }

        .btn {
            background: #FF7010;
            border-radius: 6px;
            padding: 13px 136px;
            display: block;
            margin-top: 16px;
            margin-bottom: 12px;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: white;
            border: none;
        }

        .titr {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            opacity: 0.4;
        }

        .exit {
            position: absolute;
            top: 0;
            right: -50px;

            @media  (max-width: 1000px) {
                top: -100px;
                right: -10px;
            }
        }
    }
`;