import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import MyComponent from "../MyComponent/MyComponent";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SpecialDeals from "../SpecialDeals/SpecialDeals";

const Home = () => {
    return (
        <div className="container">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <SpecialDeals></SpecialDeals>
        </div>
    );
};

export default Home;