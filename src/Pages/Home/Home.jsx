import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BlossomBites from "./BlossomBites/BlossomBites";
import Category from "./Category/Category";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Featured from "./Featured/Featured";
import Phone from "./Phone/Phone";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Blossom Bites | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BlossomBites></BlossomBites>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;