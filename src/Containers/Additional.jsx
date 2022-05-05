import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import cheesrule from '../assets/cheesrule.jpg'
import creamrule from '../assets/creamrule.jpg'
import sushifill from '../assets/sushifill.jpg'
import sushifillbru from '../assets/sushifillbru.jpg'
import fri from '../assets/fri.jpg'
import wings from '../assets/wings.jpg'
import sous1 from '../assets/sous1.jpg'
import sous2 from '../assets/sous2.jpg'

const additional = ({ addtobag }) => {

    const additionalData = [
        {
            image: cheesrule,
            id: 41,
            title: 'Pishloqli rule',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "29000",
        },
        {
            image: creamrule,
            id: 42,
            title: 'Krem rule',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "28000",
        },
        {
            image: sushifill,
            id: 43,
            title: 'Filadelfiya inqirozi',
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "59000",
        },
        {
            image: sushifillbru,
            id: 44,
            title: 'Filadelfiya krem-brulye',
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "44000",
        },
        {
            image: fri,
            id: 45,
            title: 'Kartoshka fri',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "19000",
        },
        {
            image: wings,
            id: 46,
            title: 'Qanotchalar',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "28000",
        },
        {
            image: sous1,
            id: 47,
            title: 'Sous',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "9000",
        },
        {
            image: sous2,
            id: 48,
            title: 'Sous',
            description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "8000",
        }
    ]

    return (
        <Wrapper>
            <h3 className='header'>Zakazga qo'shimcha</h3>
            <Container>
                {additionalData.map(({ id, image, title, description, price }) =>
                    <Productcontainer id='pizza' key={Math.random()}>
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

export default additional;