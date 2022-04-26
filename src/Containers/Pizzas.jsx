import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

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
            <h3 className='header'>Pizza</h3>
            <Container>
                {pizzasData.map(({ image, title, description, price }) =>
                    <Productcontainer id='pizza' key={Math.random()}>
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
                    </Productcontainer>)}
            </Container>
        </Wrapper>
    );
}

export default Pizzas;