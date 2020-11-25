import React from "react";

const Header = <p>Добавьте мясо:</p>;

const meatType = [
  { id: 30, text: "Бекон" },
  { id: 31, text: "Пепперони" },
  { id: 32, text: "Ветчина" },
];

const Meat = () => {
  return (
    <>
      {Header}
      <p>
        {meatType.map((meatTypes) => (
          <>
            <input
              type="checkbox"
              name="meatTypes"
              value={meatTypes.id}
              id={meatTypes.id}
            />
            <label htmlFor={meatTypes.id}>{meatTypes.text}</label>
          </>
        ))}
      </p>
    </>
  );
};

export default Meat;
