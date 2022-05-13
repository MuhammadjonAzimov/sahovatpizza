import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Additional from './Additional'

import bagicon from '../assets/bag.svg'
import logo from '../assets/logo.svg'
import vektor from '../assets/vektor.svg'
import Footer from './Footer'

const Bag = ({ bag, deleteproduct, addtobag }) => {
    return (
        <div>
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
                        <img src={bagicon} alt="" />
                        <Link className='link' to={"/authorization"}>
                            <span className="bag-price">Buyurtma berish</span>
                        </Link>
                    </div>

                </Header>

                <Container>
                    <h3 className='title'>Sizning zakazingiz</h3>

                    <div className="content">
                        {bag.map(({ id, image, title, description, price }) =>
                            <Productcontainer key={Math.random()}>
                                <div className="img-container">
                                    <img src={image} alt="" />
                                </div>
                                <div className="text-container">
                                    <h4 className='product-title'>{title}</h4>
                                    <p className='description'>{description}</p>
                                    <div className="price-box">
                                        <button onClick={() => deleteproduct({ id })}>O'chirish</button>
                                        <p className='price'>{price} so'm dan</p>
                                    </div>
                                </div>
                            </Productcontainer>)}
                    </div>

                    <Additional addtobag={addtobag} />
                </Container>
            </Wrapper>

            <Footer />
        </div>
    );
}

export default Bag;

const Productcontainer = styled.div`
    width: 100%;
    height: 170px;
    background-color: white;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    display: flex;
    position: relative;

    @media  (max-width: 1000px) {
        height: 200px;
    }

    .img-container {
        width: 200px;

        @media  (max-width: 1000px) {
            display: flex;
            align-items: center;
        }

        img {
            width: 100%;
        }
    }

    .text-container {
        width: 100%;
        border-radius: 0 0 12px 12px;
        padding: 20px;
        border-top: 1px solid #F0F0F0;

        .product-title {
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
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 25px;
            display: flex;
            gap: 15px;
            align-items: center;

            @media  (max-width: 1000px) {
                top: 80%;
                right: 15px;
                gap: 10px;
            }

            button {
                padding: 6px 22px;
                background: #FF7010;
                border-radius: 6px;
                border: none;

                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: white;
                cursor: pointer;

                @media  (max-width: 1000px) {
                    padding: 6px 12px;
                    font-size: 12px;
                }
            }

            .price {
                font-weight: 600;
                font-size: 12px;
                line-height: 24px;
                color: #FF7010;

                @media  (max-width: 1000px) {
                    font-size: 12px;
                }
            }
        }
    }
`;

const Container = styled.div`
    width: 100%;
    height: calc(100% - 64px);
    padding: 30px 15%;

    @media  (max-width: 1000px) {
        padding: 30px 6%;
    }

    .content {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
    }

    .title {
        margin-bottom: 14px;
        font-weight: 600;
        font-size: 35px;
        line-height: 48px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
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
            padding: 6px 10px;
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
