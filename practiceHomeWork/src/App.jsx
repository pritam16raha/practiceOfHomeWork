import BodyCard from "./components/BodyCard/BodyCard";
import Nav from "./components/Navigation/Nav";
import Search from "./components/SearchBar/SearchBar";


const Product = [
    {
        image: "../src/assets/pictures/1.jpg",
        name: "KTM",
        price: "2 lack",
        origin: "Austria",
        weight: "156Kg",
        catagory: "Sports Bike"
    },

    {
        image: "../src/assets/pictures/2.jpg",
        name: "Yamaha R1",
        price: "21 lack",
        origin: "Japan",
        weight: "186Kg",
        catagory: "Super Sports"
    },

    {
        image: "../src/assets/pictures/3.jpg",
        name: "Trimph Street Triple RS",
        price: "50 lack",
        origin: "Londom",
        weight: "236Kg",
        catagory: "Cafe Racer"
    },

    {
        image: "../src/assets/pictures/2.jpg",
        name: "Yamaha R1",
        price: "21 lack",
        origin: "Japan",
        weight: "186Kg",
        catagory: "Super Sports"
    },

    {
        image: "../src/assets/pictures/2.jpg",
        name: "Yamaha R1",
        price: "21 lack",
        origin: "Japan",
        weight: "186Kg",
        catagory: "Super Sports"
    },

    {
        image: "../src/assets/pictures/2.jpg",
        name: "Yamaha R1",
        price: "21 lack",
        origin: "Japan",
        weight: "186Kg",
        catagory: "Super Sports"
    }

    


]


const App = () => {
    return ( 
        <>
        
            <Nav />
            
            <Search />

            <div className="container">
                {
                   Product.map((item, index) => (
                    <BodyCard key={index} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                        origin={item.origin} 
                        weight={item.weight} 
                        catagory={item.catagory} />
                   ))
                }
            </div>
        </>
    );
};

export default App