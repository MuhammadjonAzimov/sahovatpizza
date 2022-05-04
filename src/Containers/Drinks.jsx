import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import nosugarpepsi from '../assets/nosugarpepsi.jpg'
import classicpepsi from '../assets/classicpepsi.jpg'
import mirinda from '../assets/mirinda.jpg'
import cherrypepsi from '../assets/cherrypepsi.jpg'

const Drinks = ({ addtobag }) => {

    const drinksData = [
        {
            image: nosugarpepsi,
            id: 17,
            title: 'Shakarsiz pepsi',
            description: "",
            price: "9000",
        },
        {
            image: classicpepsi,
            id: 18,
            title: 'Classic pepsi',
            description: "",
            price: "8000",
        },
        {
            image: mirinda,
            id: 19,
            title: "Mirinda",
            description: "",
            price: "7000",
        },
        {
            image: cherrypepsi,
            id: 20,
            title: "Olchali pepsi",
            description: "",
            price: "9000",
        },
        {
            image: cherrypepsi,
            id: 21,
            title: "Olchali pepsi",
            description: "",
            price: "9000",
        },
        {
            image: mirinda,
            id: 22,
            title: "Mirinda",
            description: "",
            price: "7000",
        },
        {
            image: nosugarpepsi,
            id: 23,
            title: 'Shakarsiz pepsi',
            description: "",
            price: "9000",
        },
        {
            image: classicpepsi,
            id: 24,
            title: 'Classic pepsi',
            description: "",
            price: "8000",
        },
    ]

    return (
        <Wrapper>
            <h3 className='header'>Ichimliklar</h3>
            <Container>
                {drinksData.map(({ id, image, title, description, price }) =>
                    <Productcontainer id='drinks' key={Math.random()}>
                        <div className="img-container">
                            <img src={image} alt="" />
                        </div>
                        <div className="text-container">
                            <h4 className='title'>{title}</h4>
                            <p className='description'>{description}</p>
                            <div className="price-box">
                                <button onClick={() => addtobag({ id, price, title, description, image })}>Tanlash</button>
                                <p className='price'>{price} so'm dan</p>
                            </div>
                        </div>
                    </Productcontainer>)}
            </Container>
        </Wrapper>
    );
}

export default Drinks;