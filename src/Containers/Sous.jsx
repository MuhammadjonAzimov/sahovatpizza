import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import sous1 from '../assets/sous1.jpg'
import sous2 from '../assets/sous2.jpg'
import sous3 from '../assets/sous3.jpg'
import sous4 from '../assets/sous4.jpg'


const Sous = () => {

    const sousData = [
        {
            image: sous1,
            id: 1,
            title: 'Sous',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "9 000",
        },
        {
            image: sous2,
            id: 2,
            title: 'Sous',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "8 000",
        },
        {
            image: sous3,
            id: 3,
            title: "Sous",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "10 000",
        },
        {
            image: sous4,
            id: 4,
            title: "Sous",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "11 000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Sous</h3>
            <Container>
                {sousData.map(({ image, title, description, price }) =>
                    <Productcontainer id='sous' key={Math.random()}>
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

export default Sous;