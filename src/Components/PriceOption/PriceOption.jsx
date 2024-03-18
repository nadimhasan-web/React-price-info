import PropTypes from "prop-types";
import Features from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-rose-500 py-3 px-5 flex flex-col rounded-xl space-y-3 text-white">
      <p className="font-bold text-4xl">
        {name}
      </p>
      <h2 className="text-4xl">
        Price: ${price}
      </h2>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
      <button className="bg-green-500 py-2 w-full rounded-xl hover:bg-green-600 duration-200">Buy now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
