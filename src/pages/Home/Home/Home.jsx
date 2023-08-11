import Marquee from "react-fast-marquee";
import LiveTv from "../../../components/Live-tv/LiveTv";
import FeaturedMovo from "../FeatureMarquee/FeaturedMovo";

const Home = () => {
    return (
        <div className="bg-black h-screen">
            <div className="px-14">
          
            <h1 className="text-white">featured movies -</h1>
     
                <Marquee>
                    <FeaturedMovo/>
                </Marquee>
                <LiveTv/>
            </div>
        </div>
    );
};

export default Home;