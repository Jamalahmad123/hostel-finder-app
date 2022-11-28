import Wrapper from "./ui/Wrapper";
import { Styles } from "../styles/basicStyles";

const Hostels = () => {
  return (
    <section className="py-14">
      <Wrapper className="">
        <header className="space-y-3">
          <h2 className={`${Styles.sectionHeading} text-center`}>
            Choose The Best Place For Your Stay
          </h2>
          <p className="text-black text-center">
            We have prepared several hostels, villas and apartments for stay.
          </p>
        </header>
      </Wrapper>
    </section>
  );
};

export default Hostels;
