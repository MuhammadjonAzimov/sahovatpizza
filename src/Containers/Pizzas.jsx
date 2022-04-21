import React from 'react';
import styled from 'styled-components';

import chilliepizza from '../assets/chilliepizza.jpg'
import cucumberpizza from '../assets/cucumberpizza.jpg'
import greenpizza from '../assets/greenpizza.jpg'
import seasonpizza from '../assets/4seasonpizza.jpg'

const Pizzas = () => {

    const pizzasData = [
        {
            image: chilliepizza,
            id: 1,
            title: 'Shirin chili',
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "99 000",
        },
        {
            image: cucumberpizza,
            id: 2,
            title: 'Lazzat',
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "85 000",
        },
        {
            image: greenpizza,
            id: 3,
            title: "Qo'ziqorinli",
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "91 000",
        },
        {
            image: seasonpizza,
            id: 4,
            title: 'Kombo',
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "80 000",
        },
        {
            image: seasonpizza,
            id: 5,
            title: 'Kombo',
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "80 000",
        },
        {
            image: greenpizza,
            id: 6,
            title: "Qo'ziqorinli",
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "91 000",
        },
        {
            image: chilliepizza,
            id: 7,
            title: 'Shirin chili',
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "99 000",
        },
        {
            image: cucumberpizza,
            id: 8,
            title: 'Lazzat',
            description: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "85 000",
        },
    ]

    return (
        <Wrapper>
            <h3 className='pizza-title'>Pizza</h3>
            <Container>
                {pizzasData.map(({ image, title, description, price }) =>
                    <Pizzacontainer key={Math.random()}>
                        <div className="img-container">
                            <img src={image} alt="" />
                        </div>
                        <div className="text-container">
                            <h4 className='title'>{title}</h4>
                            <p className='description'>{description}</p>
                            <div className="price-box">
                                <button>Tanlash</button>
                                <p className='price'>{price} so'm dan</p>
                            </div>
                        </div>
                    </Pizzacontainer>)}
            </Container>
        </Wrapper>
    );
}

export default Pizzas;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    
    .pizza-title {
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`;

const Pizzacontainer = styled.div`
    margin-top: 30px;
    background-color: white;
    border: 1px solid #F0F0F0;
    border-radius: 12px;

    .img-container {
        width: 100%;

        img {
            border-radius: 12px 12px 0 0;
            width: 100%;
        }
    }

    .text-container {
        width: 100%;
        border-radius: 0 0 12px 12px;
        padding: 20px;
        border-top: 1px solid #F0F0F0;

        .title {
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
        }

        .description {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            margin-top: 4px;
        }

        .price-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;

            button {
                padding: 6px 22px;
                background: #FF7010;
                border-radius: 6px;
                border: none;

                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: white;
            }

            .price {
                font-weight: 600;
                font-size: 12px;
                line-height: 24px;
                color: #FF7010;
            }
        }
    }
`;
