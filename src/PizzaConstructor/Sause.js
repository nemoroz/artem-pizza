import React from "react";

const Header = <p>Выберите соус:</p>;

const Tomato = () => {
  return (
    <>
      <input
        type="radio"
        name="pizzaSause"
        value="Tomato"
        id="Tomato"
        defaultChecked
      />
      <label htmlFor="Tomato">Томатный</label>
    </>
  );
};

const White = () => {
  return (
    <>
      <input
        type="radio"
        name="pizzaSause"
        value="White"
        id="White"
      />
      <label htmlFor="White">Белый</label>
    </>
  );
};
const Spicy = () => {
  return (
    <>
      <input
        type="radio"
        name="pizzaSause"
        value="Spicy"
        id="Spicy"
      />
      <label htmlFor="Spicy">Острый</label>
    </>
  );
};

const Sause = () => {
  return (
    <>
      {Header}
      <p>
        <Tomato />
        <White />
        <Spicy />
      </p>
    </>
  );
};

export default Sause;
