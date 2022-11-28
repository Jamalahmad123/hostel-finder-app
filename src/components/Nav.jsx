import { Link } from "react-router-dom";
import { Styles } from "../styles/basicStyles";
import { links } from "../data/constantData";
import Wrapper from "./ui/Wrapper";

const Nav = () => {
  return (
    <nav className="bg-orangeLight py-4">
      <Wrapper className={`${Styles.flexCenter} space-x-8`}>
        {links.map((link, i) => (
          <Link className="text-white capitalize" key={i}>
            {link}
          </Link>
        ))}
        <button className="text-white capitaliza border border-white py-2 px-3 rounded-md">
          Book Now
        </button>
      </Wrapper>
    </nav>
  );
};

export default Nav;
