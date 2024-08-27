import React, { createContext } from "react";

export default function App3() {
  const HelloLicat = () => {
    return (
      <>
        <userInfo.Consumer>
          {(value) => {
            return (
              <div>
                <h2>{value.name}</h2>
                <strong>{value.id}</strong>
                <HelloLicatTwo />
              </div>
            );
          }}
        </userInfo.Consumer>
        <HelloLicatTwo />
      </>
    );
  };
  const HelloLicatTwo = () => {
    return (
      <userInfo.Consumer>
        {(value) => {
          return (
            <div>
              <h2>{value.name}</h2>
              <strong>{value.id}</strong>
            </div>
          );
        }}
      </userInfo.Consumer>
    );
  };
  const userInfo = createContext({ name: "gary", id: "garyisfree" });
  return <HelloLicat />;
}
