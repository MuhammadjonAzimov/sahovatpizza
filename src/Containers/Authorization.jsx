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

    .container {
        padding: 60px 260px;
        background: #F9F9F9;
        border-radius: 24px;
        position: relative;

        .exit {
            position: absolute;
            top: 0;
            right: -50px;
        }
    }
`;