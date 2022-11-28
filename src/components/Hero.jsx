import Wrapper from "./ui/Wrapper";

const Hero = () => {
  return (
    <header className="bg-hero">
      <Wrapper className="py-20 md:min-h-[80vh]">
        <h1 className="text-white text-xl md:text-2xl lg:text-4xl uppercase font-normal">
          welcome to <br />{" "}
          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            KIJIJI HOSTEL
          </span>
        </h1>
        <p className="text-white text-base md:text-lg md:max-w-md mt-3 mb-6">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
        <button className="text-white bg-orangeLight capitaliza border-none py-3 px-6 rounded-md">
          Book Now
        </button>
      </Wrapper>
    </header>
  );
};

export default Hero;
