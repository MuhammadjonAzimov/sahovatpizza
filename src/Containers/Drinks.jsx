import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import nosugarpepsi from '../assets/nosugarpepsi.jpg'
import classicpepsi from '../assets/classicpepsi.jpg'
import mirinda from '../assets/mirinda.jpg'
import cherrypepsi from '../assets/cherrypepsi.jpg'

const Drinks = () => {

    const drinksData = [
        {
            image: nosugarpepsi,
            id: 1,
            title: 'Shakarsiz pepsi',
            description: "",
            price: "9 000",
        },
        {
            image: classicpepsi,
            id: 2,
            title: 'Classic pepsi',
            description: "",
            price: "8 000",
        },
        {
            image: mirinda,
            id: 3,
            title: "Mirinda",
            description: "",
            price: "7 000",
        },
        {
            image: cherrypepsi,
            id: 4,
            title: "Olchali pepsi",
            description: "",
            price: "9 000",
        },
        {
            image: cherrypepsi,
            id: 5,
            title: "Olchali pepsi",
            description: "",
            price: "9 000",
        },
        {
            image: mirinda,
            id: 6,
            title: "Mirinda",
            description: "",
            price: "7 000",
        },
        {
            image: nosugarpepsi,
            id: 7,
            title: 'Shakarsiz pepsi',
            description: "",
            price: "9 000",
        },
        {
            image: classicpepsi,
            id: 8,
            title: 'Classic pepsi',
            description: "",
            price: "8 000",
        },
    ]

    return (
        <Wrapper>
            <h3 className='header'>Ichimliklar</h3>
            <Container>
                {drinksData.map(({ image, title, description, price }) =>
                    <Productcontainer key={Math.random()}>
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

export default Drinks;