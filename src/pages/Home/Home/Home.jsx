import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SpecialDeals from "../SpecialDeals/SpecialDeals";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    useTitle("Home");
    return (
        <div className="container">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <SpecialDeals></SpecialDeals>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;