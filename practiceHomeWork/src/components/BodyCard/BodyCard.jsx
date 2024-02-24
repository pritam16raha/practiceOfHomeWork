import './body.css'
const BodyCard = (card) => {
    
    const {image, name, price, origin, weight, catagory} = card
    
    
    
    return(
        <>
            <div className="card">
                <div className='card2'>
                    <div className='section1'>
                        <div className="profilePic">
                            <img src={image} alt=""/>
                        </div>
                    </div>

                    <div className='section2'>
                        <div className="productName">
                            <h1>{name}</h1>
                        </div>

                        <div className="priceOfProduct">
                            <h3>{price}</h3>
                        </div>

                        <div className="countryOfOrigin">
                            <h3>{origin}</h3>
                        </div>

                        <div className="productWeight">
                            <h9>{weight}</h9>
                        </div>

                        <div className="productCatagory">
                            <h5>{catagory}</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        
        </>
    );
};

export default BodyCard