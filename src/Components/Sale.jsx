import React from 'react';
import styled from 'styled-components';

import sale from '../assets/sale.svg'
import sale3 from '../assets/sale3.svg'

const Sale = () => {
    return (
        <Wrapper>
            <div className="sale-container">
                <div className="sale-box orange">
                    <img src={sale3} alt="" />
                    <span className='text'>
                        3 o'rta pizza <br />
                        333 ming somdan
                    </span>
                </div>
                <div className="sale-box red">
                    <img src={sale} alt="" />
                    <span className='text'>
                        olib ketishda 10% keshbek (etkazib berish)
                    </span>
                </div>
                <div className="sale-box orange">
                    <img src={sale3} alt="" />
                    <span className='text'>
                        3 o'rta pizza <br />
                        333 ming somdan
                    </span>
                </div>
                <div className="sale-box red">
                    <img src={sale} alt="" />
                    <span className='text'>
                        olib ketishda 10% keshbek (etkazib berish)
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

export default Sale;

const Wrapper = styled.div`
    width: 100%;
    height: 440px;
    display: flex;
    align-items: flex-end;
    user-select: none;

    @media  (max-width: 1000px) {
        height: 410px;
    }

    .sale-container {
        width: 100%;
        height: 280px;
        display: flex;
        gap: 30px;

        @media  (max-width: 1300px) {
            gap: 20px;
            overflow-x: scroll;

            ::-webkit-scrollbar {
                width: 0px;
            }
        }

    }

    .sale-box {
        height: 100%;
        width: 100%;
        border-radius: 12px;
        position: relative;

        .text {
            position: absolute;
            bottom: 15px;
            left: 15px;

            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            color: white;
        }
    }

    .orange {
        background: #FF7010;

        img {
            width: 245px;
            border-radius: 12px;
        }
    }

    .red {
        background: #E23535;
        
        img {
            margin-top: 30px;
            width: 245px;
            border: 12px;
        }
    }
`;
