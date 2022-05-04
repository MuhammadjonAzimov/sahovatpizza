import styled from 'styled-components'
import logo from '../assets/logo.svg'
import phone from '../assets/telphone.svg'
import location from '../assets/location.svg'
import facebook from '../assets/facebbok.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
    return (
        <Wrapper>
            <div className="logo-container">
                <div className="logo">
                    <img className='logo-img' src={logo} alt="" />
                    <span className='logo-text'>Saxovat pizza</span>
                </div>
            </div>
            <div className="info-container">
                <h6>Saxovat pizza</h6>
                <span>Kompaniya haqida</span>
                <span>Foydalanish shartlari</span>
                <span>Kafolat shartlari</span>
            </div>
            <div className="contacts-conntainer">
                <h6>Kontaktlar</h6>
                <div className="contact">
                    <img src={phone} alt="" />
                    <span>+998 94 935 88 79</span>
                </div>
                <div className="contact">
                    <img src={location} alt="" />
                    <span>O'zbekiston Toshkent Shahar Olmazor tumani</span>
                </div>
                <div className="blog-container">
                    <div className="blog">
                        <img src={facebook} alt="" />
                        <span>facebook</span>
                    </div>
                    <div className="blog">
                        <img src={instagram} alt="" />
                        <span>instagram</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 15%;
    background-color: white;

    @media  (max-width: 1000px) {
        padding: 30px 6%;
    }

    display: flex;
    justify-content: space-between;

    user-select: none;

    @media  (max-width: 1000px) {
        display: block;
        padding: 12px 0;
    }

    h6 {
        margin-bottom: 2px;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 12px;

        @media  (max-width: 1000px) {
            gap: 8px;
            margin-bottom: 20px;
        }

        .logo-img {
            width: 32px;
            height: 32px;
        }

        .logo-text {
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

    .info-container {
        span {
            display: block;
            margin-top: 20px;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
        }
    }

    .contacts-conntainer {
        @media  (max-width: 1000px) {
            margin-top: 20px;
        }
        
        .contact {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
        }
    }

    .blog-container {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 20px;

        .blog {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
        }
    }
`;
