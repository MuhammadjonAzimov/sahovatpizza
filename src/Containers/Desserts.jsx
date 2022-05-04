import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import cheesrule from '../assets/cheesrule.jpg'
import creamrule from '../assets/creamrule.jpg'
import magnitcream from '../assets/magnitisecream.jpg'
import boxcream from '../assets/boxmagnitcream.jpg'

const Desserts = ({ addtobag }) => {

    const desertsData = [
        {
            image: cheesrule,
            id: 33,
            title: 'Pishloqli rule',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "29000",
        },
        {
            image: creamrule,
            id: 34,
            title: 'Krem rule',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "28000",
        },
        {
            image: magnitcream,
            id: 35,
            title: "Magnit muzqaymoq",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "5000",
        },
        {
            image: boxcream,
            id: 36,
            title: "Magnit muzqaymoq",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "20000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Dessert</h3>
            <Container>
                {desertsData.map(({ id, image, title, description, price }) =>
                    <Productcontainer id='dessert' key={Math.random()}>
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

export default Desserts;