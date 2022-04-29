import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import sous1 from '../assets/sous1.jpg'
import sous2 from '../assets/sous2.jpg'
import sous3 from '../assets/sous3.jpg'
import sous4 from '../assets/sous4.jpg'


const Sous = ({ addtobag }) => {

    const sousData = [
        {
            image: sous1,
            id: 1,
            title: 'Sous',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "9000",
        },
        {
            image: sous2,
            id: 2,
            title: 'Sous',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "8000",
        },
        {
            image: sous3,
            id: 3,
            title: "Sous",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "10000",
        },
        {
            image: sous4,
            id: 4,
            title: "Sous",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "11000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Sous</h3>
            <Container>
                {sousData.map(({ id, image, title, description, price }) =>
                    <Productcontainer id='sous' key={Math.random()}>
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

export default Sous;