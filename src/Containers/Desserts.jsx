import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import cheesrule from '../assets/cheesrule.jpg'
import creamrule from '../assets/creamrule.jpg'
import magnitcream from '../assets/magnitisecream.jpg'
import boxcream from '../assets/boxmagnitcream.jpg'

const Desserts = () => {

    const desertsData = [
        {
            image: cheesrule,
            id: 1,
            title: 'Pishloqli rule',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "29 000",
        },
        {
            image: creamrule,
            id: 2,
            title: 'Krem rule',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "28 000",
        },
        {
            image: magnitcream,
            id: 3,
            title: "Magnit muzqaymoq",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "5 000",
        },
        {
            image: boxcream,
            id: 4,
            title: "Magnit muzqaymoq",
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "20 000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Dessert</h3>
            <Container>
                {desertsData.map(({ image, title, description, price }) =>
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

export default Desserts;