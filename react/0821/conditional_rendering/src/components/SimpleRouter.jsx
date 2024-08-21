import React from "react";
import Guest from "../pages/Guest";
import User from "../pages/User";
import Admin from "../pages/Admin";
import Loading from "./Loading";

// 권한에 따른 페이지 로딩 수행
export default function SimpleRouter({ userPermissions, isLoading }) {
  if (isLoading) {
    return <Loading />;
  }
  switch (userPermissions) {
    case "user":
      return <User />;
    case "admin":
      return <Admin />;
    case "guest":
      return <Guest />;
    default:
      return null;
  }
}
