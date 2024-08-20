import React, { useState } from "react";

function AddForm({ animalList, setAnimalList }) {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    species: "",
    age: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();

    const newId = animalList[animalList.length - 1].id + 1;
    const animalToAdd = {
      ...newAnimal,
      id: newId,
    };

    setAnimalList([...animalList, animalToAdd]);

    // 초기화
    setNewAnimal({
      name: "",
      species: "",
      age: "",
    });
  };

  // 초기화 상태
  const handleOnChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <fieldset>
        <legend>새로운 애완동물을 추가하세요!</legend>
        <label>
          이름
          <input
            type="text"
            placeholder="이름"
            value={newAnimal.name}
            name="name"
            onChange={handleOnChange}
          />
        </label>
        <br />
        <label>
          종
          <input
            type="text"
            placeholder="species"
            value={newAnimal.species}
            name="species"
            onChange={handleOnChange}
          />
        </label>
        <br />
        <label>
          나이
          <input
            type="text"
            placeholder="나이"
            value={newAnimal.age}
            name="age"
            onChange={handleOnChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleAdd}>
          추가하기
        </button>
      </fieldset>
    </form>
  );
}

export default AddForm;
