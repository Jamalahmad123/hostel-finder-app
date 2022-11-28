import { Styles } from "../styles/basicStyles";
import Wrapper from "./ui/Wrapper";
import { cta } from "../assets/images";

const Cta = () => {
  return (
    <section
      style={{
        background: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${cta})`,
      }}
      className="py-14 bg-cover bg-no-repeat bg-center"
    >
      <Wrapper className="py-24">
        <h2 className={`${Styles.sectionHeading} text-white`}>
          Do you want to rent out the hostel?
        </h2>
        <p className="text-white mt-3 mb-5 md:max-w-sm">
          We prepare the best choice of places with high quality that is
          guaranteed by the hostel assessment agency.
        </p>
        <button className="text-white bg-orangeLight capitaliza border-none py-3 px-6 rounded-md">
          Book Now
        </button>
      </Wrapper>
    </section>
  );
};

export default Cta;
