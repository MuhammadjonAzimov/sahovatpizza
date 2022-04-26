import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

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
                    <Productcontainer id='kombo' key={Math.random()}>
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

export default Combo;