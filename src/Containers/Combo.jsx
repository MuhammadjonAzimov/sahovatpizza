import styled from 'styled-components';

import kombo1 from '../assets/kombo1.jpg'
import kombo2 from '../assets/kombo2.jpg'
import kombo3 from '../assets/kombo3.jpg'
import kombo4 from '../assets/kombo4.jpg'

const Combo = () => {

    const comboData = [
        {
            image: kombo1,
            id: 1,
            title: 'Ikkikara kombo',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "209 000",
        },
        {
            image: kombo2,
            id: 2,
            title: 'Uchkara kombo',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "308 000",
        },
        {
            image: kombo3,
            id: 3,
            title: "Ikki + bir",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "217 000",
        },
        {
            image: kombo4,
            id: 4,
            title: "Uch + bir",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "39 000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Combo</h3>
            <Container>
                {comboData.map(({ image, title, description, price }) =>
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

export default Combo;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    
    .header {
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

                @media  (max-width: 1000px) {
                    padding: 10px 28px;
                    font-size: 16px;
                }
            }

            .price {
                font-weight: 600;
                font-size: 12px;
                line-height: 24px;
                color: #FF7010;

                @media  (max-width: 1000px) {
                    font-size: 16px;
                }
            }
        }
    }
`;