import { Styles } from "../styles/basicStyles";
import { about1, about2 } from "../assets/images";
import Wrapper from "./ui/Wrapper";

const About = () => {
  return (
    <section className="py-14">
      <Wrapper>
        <div className={`${Styles.flexCenter} flex-col lg:flex-row gap-6`}>
          <div className="flex items-center gap-4">
            <img
              src={about1}
              alt="about-img"
              className="w-full rounded-lg md:w-[300px] md:min-h-[450px] object-cover md:rounded-none"
            />
            <img
              src={about2}
              alt="about-img"
              className="hidden w-[180px] min-h-[300px] object-cover md:block"
            />
          </div>
          <div className="w-full md:max-w-md max-w-none">
            <h2 className={`${Styles.sectionHeading}`}>
              Welcome to our Kijiji Hostel
            </h2>
            <p className="text-black text-base mt-3 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus in
              enim in in sagittis tristique cursus nam in. Mauris, elementum
              lacus in enim. Sapien, massa orci fames tellus in quis vel. Ornare
              cursus sit lobortis in nullam magnis tincidunt amet quis.
            </p>
            <button className="text-white bg-orangeLight capitaliza border-none py-3 px-6 rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
