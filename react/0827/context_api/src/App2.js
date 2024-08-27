import React, { createContext, useContext } from "react";

const UserInfo = createContext();

const App2 = () => {
  return (
    <>
      <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
        <HelloLicatTwo />
      </UserInfo.Provider>
      <UserInfo.Provider value={{ name: "gary", id: "garyisfree" }}>
        <HelloLicat />
      </UserInfo.Provider>
    </>
  );
};

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App2;
