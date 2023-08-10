import FeaturedMovo from "../FeatureMarquee/FeaturedMovo";
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div className="bg-white h-screen">
            <div className="mx-48 bg-gray-800 px-14">
          
            <h1 className="text-white">featured movies -</h1>
     
                <Marquee>
                    <FeaturedMovo/>
                </Marquee>
            </div>
        </div>
    );
};

export default Home;