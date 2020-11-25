import React from "react";

const Header = <p>Добавьте сыр:</p>;

const cheeseType = [
  { id: 10, text: "Моцарелла" },
  { id: 11, text: "Чеддер" },
  { id: 12, text: "Дор Блю" },
];

const Cheese = () => {
  return (
    <>
      {Header}
      <p>
        {cheeseType.map((cheeseTypes) => (
          <>
            <input
              type="checkbox"
              name="cheeseTypes"
              value={cheeseTypes.id}
              id={cheeseTypes.id}
            />
            <label htmlFor={cheeseTypes.id}>{cheeseTypes.text}</label>
          </>
        ))}
      </p>
    </>
  );
};

export default Cheese;
