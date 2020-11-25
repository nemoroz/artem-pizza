import React from "react";

const Header =  <p>Выберите тип теста:</p>;

const FluffyDough = () => {
  return (
    <>
      <input
        type="radio"
        name="pizzaDough"
        value="fluffyDough"
        id="fluffyDough"
        defaultChecked
      />
      <label htmlFor="fluffyDough">Пышное</label>
    </>
  );
};

const ThinDough = () => {
  return (
    <>
      <input type="radio" name="pizzaDough" value="thinDough" id="thinDough" />
      <label htmlFor="doughThin">Тонкое</label>
    </>
  );
};

const DoughType = () => {
  return (
    <>
     {Header}
      <p>
        <FluffyDough />
        <ThinDough />
      </p>
    </>
  );
};

export default DoughType;
