import { Styles } from "../styles/basicStyles";
import Wrapper from "./ui/Wrapper";
import { cities } from "../data/constantData";

const Cities = () => {
  return (
    <section className="py-14">
      <Wrapper className="space-y-12">
        <header className={Styles.flexBetween}>
          <h2 className={`${Styles.sectionHeading} text-black`}>
            explore nearby
          </h2>
          <button className="text-white bg-orangeLight capitaliza border-none py-3 px-6 rounded-md">
            explore more
          </button>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {cities.map((city) => (
            <figure key={city.id} className="space-y-3">
              <img
                src={city.img}
                alt={city.name}
                className="h-[400px] w-[300px] object-cover rounded-lg shadow-lg"
              />
              <figcaption className="uppercase text-black font-medium text-lg">
                {city.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Cities;
