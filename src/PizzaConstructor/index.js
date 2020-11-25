import React from "react";
import Cheese from "./Cheese";
import DoughType from "./DoughType.js";
import Meat from "./Meat";
import PizzaSize from "./PizzaSize.js";
import PriceButton from "./PriceButton";
import ResultMessage from "./ResultMessage";
import Sause from "./Sause";
import Vegetables from "./Vegetables.js";

const PizzaConstructor = () => {
  return (
    <>
      <p>Собираем свою пиццу</p>
      <PizzaSize />
      <DoughType />
      <Sause />
      <Cheese />
      <Vegetables />
      <Meat />
      <PriceButton />
      <ResultMessage />
    </>
  );
};

export default PizzaConstructor;
