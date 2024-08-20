import React from "react";

export default function AnimalList({ animalList }) {
  return (
    <ul>
      {animalList.map((animal) => (
        <li key={animal.id}>
          {animal.name}은 {animal.species}입니다. 그리고 {animal.age}살 입니다.
        </li>
      ))}
    </ul>
  );
}
