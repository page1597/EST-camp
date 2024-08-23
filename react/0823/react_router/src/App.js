import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="wade" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/courses" element={<ProductDetails />}></Route>
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/two">two 로 이동합니다.</Link>
          </li>
          <Link to="/blog/1"> four_1 </Link>
          <Link to="/blog/2"> four_2 </Link>
          <Link to="/blog/3"> four_3 </Link>

          <li>
            <Link
              to={{
                pathname: "/products",
                search: "?category=electronics&sort=price",
              }}
            >
              전자제품 (가격순)
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/courses",
                search: "?sort=name&sorting=asc",
                hash: "#the-hash",
              }}
              state={{
                productId: 123,
                fromPage: "list",
                lastScrollPosition: 1500,
              }}
            >
              제품 상세 보기
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

function ProductList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  return (
    <div>
      {category} {sort}
    </div>
  );
}

function ProductDetails() {
  const location = useLocation();
  console.log(location);
  const { productId, fromPage, lastScrollPosition } = location.state || {};

  // 리액트에서는 기본적으로 해시 링크가 작동하지 않는다.
  return (
    <>
      <ul style={{ height: "2000px" }}>
        <li>{productId}</li>
        <li>{fromPage}</li>
        <li>{lastScrollPosition}</li>
      </ul>
      <li id="the-hash">the hash</li>
    </>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One({ name }) {
  return <h1>hello {name}</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}
function Blog() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Blog</h1>;
}
export default App;
