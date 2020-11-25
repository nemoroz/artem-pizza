import React from "react";

const Header = <p>Выберите размер пиццы:</p>;

const firstSize = () => {
  return (
    <>
      <input
        type="radio"
        name="pizzaSize"
        value="30cm"
        id="firstSize"
        defaultChecked
      />
      <label htmlFor="firstSize">30 сантиметров</label>
    </>
  );
};

const secondSize = () => {
  return (
    <>
      <input type="radio" name="pizzaSize" value="35cm" id="secondSize" />
      <label htmlFor="secondSize">35 сантиметров</label>
    </>
  );
};

const PizzaSize = () => {
  return (
    <>
      {Header}
      <p>
        <firstSize />
        <secondSize />
      </p>
    </>
  );
};

export default PizzaSize;
