import React from "react";

const Header = <p>Добавьте овощи:</p>;

const vegetablesType = [
  { id: 20, text: "Помидоры" },
  { id: 21, text: "Грибы" },
  { id: 22, text: "Перец" },
];

const Vegetables = () => {
  return (
    <>
		{Header}
      <p>
        {vegetablesType.map((vegetablesTypes) => (
          <>
            <input
              type="checkbox"
              name="vegetablesTypes"
              value={vegetablesTypes.id}
              id={vegetablesTypes.id}
            />
            <label htmlFor={vegetablesTypes.id}>{vegetablesTypes.text}</label>
          </>
        ))}
      </p>
    </>
  );
};

export default Vegetables;
