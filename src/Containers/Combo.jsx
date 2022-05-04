import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import kombo1 from '../assets/kombo1.jpg'
import kombo2 from '../assets/kombo2.jpg'
import kombo3 from '../assets/kombo3.jpg'
import kombo4 from '../assets/kombo4.jpg'

const Combo = ({ addtobag }) => {

    const comboData = [
        {
            image: kombo1,
            id: 29,
            title: 'Ikkikara kombo',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "209000",
        },
        {
            image: kombo2,
            id: 30,
            title: 'Uchkara kombo',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "308000",
        },
        {
            image: kombo3,
            id: 31,
            title: "Ikki + bir",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "217000",
        },
        {
            image: kombo4,
            id: 32,
            title: "Uch + bir",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "39000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Combo</h3>
            <Container>
                {comboData.map(({ id, image, title, description, price }) =>
                    <Productcontainer id='kombo' key={Math.random()}>
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

export default Combo;