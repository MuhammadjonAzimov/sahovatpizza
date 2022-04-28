import { Wrapper } from '../Components/Styles';
import { Container } from '../Components/Styles';
import { Productcontainer } from '../Components/Styles'

import sushifill from '../assets/sushifill.jpg'
import sushifillbru from '../assets/sushifillbru.jpg'
import sushisuperfill from '../assets/sushisuperfill.jpg'
import sushitiger from '../assets/sushitiger.jpg'

const Sushies = ({ addtobag }) => {

    const sushiesData = [
        {
            image: sushifill,
            id: 1,
            title: 'Filadelfiya inqirozi',
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "59 000",
        },
        {
            image: sushifillbru,
            id: 2,
            title: 'Filadelfiya krem-brulye',
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "44 000",
        },
        {
            image: sushisuperfill,
            id: 3,
            title: "Super Filadelfiya",
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "51 000",
        },
        {
            image: sushitiger,
            id: 4,
            title: "Yo'lbars",
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "60 000",
        },
        {
            image: sushitiger,
            id: 5,
            title: "Yo'lbars",
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "60 000",
        },
        {
            image: sushisuperfill,
            id: 6,
            title: "Super Filadelfiya",
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "51 000",
        },
        {
            image: sushifill,
            id: 7,
            title: 'Filadelfiya inqirozi',
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "59 000",
        },
        {
            image: sushifillbru,
            id: 8,
            title: 'Filadelfiya krem-brulye',
            description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: "44 000",
        },
    ]

    return (
        <Wrapper>
            <h3 className='header'>Sushi</h3>
            <Container>
                {sushiesData.map(({ id, image, title, description, price }) =>
                    <Productcontainer id='sushi' key={Math.random()}>
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

export default Sushies;