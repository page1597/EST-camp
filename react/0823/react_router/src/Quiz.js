import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import Products from "./Page/Products/Index";
import ProductNotice from "./Page/Products/Notice";
import Cart from "./Page/Cart";
import Users from "./Page/Users/Index";
import Coupon from "./Page/Users/Coupon";
import Question from "./Page/Users/Question";
import Notice from "./Page/Users/Notice";
import Detail from "./Page/Products/Detail";

export default function Quiz() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">product</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<Detail />} />
          <Route path="notice" element={<ProductNotice />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />}>
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h1>home</h1>;
};
