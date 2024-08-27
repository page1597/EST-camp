import { UserInfo } from "../contexts/UserInfo";

export default function HelloLicat() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <>
            <div>Hello Licat</div>
            <strong>{value.name}</strong>
            <p>{value.id}</p>
            <HelloLicatTwo />
          </>
        );
      }}
    </UserInfo.Consumer>
  );
}
function HelloLicatTwo() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <>
            <div>Hello Licat Two</div>
            <strong>{value.name}</strong>
            <p>{value.id}</p>
          </>
        );
      }}
    </UserInfo.Consumer>
  );
}
