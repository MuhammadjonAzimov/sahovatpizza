import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import fri from '../assets/fri.jpg'
import wings from '../assets/wings.jpg'
import chikennuggets from '../assets/chikennuggets.jpg'
import Shaverma from '../assets/shaverma.jpg'

const Snacs = () => {

    const snaksData = [
        {
            image: fri,
            id: 1,
            title: 'Kartoshka fri',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "19 000",
        },
        {
            image: wings,
            id: 2,
            title: 'Qanotchalar',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "28 000",
        },
        {
            image: chikennuggets,
            id: 3,
            title: "Nagets",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "17 000",
        },
        {
            image: Shaverma,
            id: 4,
            title: "Lavash",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "11 000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Snak</h3>
            <Container>
                {snaksData.map(({ image, title, description, price }) =>
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

export default Snacs;