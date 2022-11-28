import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { Styles } from "../styles/basicStyles";
import { links, about } from "../data/constantData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-14">
      <Wrapper>
        <div
          className={`flex justify-between items-center flex-col gap-8 md:gap-12 md:items-start md:flex-row`}
        >
          <h2 className={`${Styles.sectionHeading} text-black flex-1`}>
            Kijiji Hostel
          </h2>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg text-black font-medium">Links</h3>
            <div className="space-y-2">
              {links.map((link, i) => (
                <Link
                  className="text-base capitalize block text-gray-500"
                  key={i}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg text-black font-medium">About</h3>
            <div className="space-y-2">
              {about.map((link, i) => (
                <Link
                  className="text-base capitalize block text-gray-500"
                  key={i}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="bg-orangeLight mt-10 py-8">
        <Wrapper
          className={`${Styles.flexBetween} flex-col gap-6 md:flex-row md:gap-0`}
        >
          <p className="text-white">
            © 2022 Kijiji Hostel All rights reserved.
          </p>
          <div className={`${Styles.flexCenter} gap-4`}>
            <FaFacebook size={25} className="text-white" />
            <FaInstagram size={25} className="text-white" />
            <FaTwitter size={25} className="text-white" />
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
