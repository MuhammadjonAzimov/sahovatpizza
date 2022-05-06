import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    
    .header {
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 30px;
`;

export const Productcontainer = styled.div`
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
        align-content: flex-end;

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
                cursor: pointer;

                @media  (max-width: 1000px) {
                    padding: 10px 28px;
                    font-size: 16px;
                }

                @media  (max-width: 700px) {
                    padding: 6px 18px;
                    font-size: 14px;
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

                @media  (max-width: 700px) {
                    font-size: 14px;
                }
            }
        }
    }
`;