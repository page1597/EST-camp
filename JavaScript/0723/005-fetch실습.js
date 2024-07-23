const displayData = (product) => {
  const productContainer = document.createElement("div");
  const productName = document.createElement("h2");
  const productImg = document.createElement("img");
  const productPrice = document.createElement("p");

  productName.textContent = product.productName;
  productPrice.textContent = `${product.price}원`;
  productImg.src = `https://test.api.weniv.co.kr/${product.thumbnailImg}`;

  productContainer.appendChild(productName);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(productImg);

  document.body.appendChild(productContainer);
};

let req = fetch("https://test.api.weniv.co.kr/mall");
req
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach(displayData);
  })
  .catch((error) => {
    displayData(`데이터 가져오기 실패: ${error}`);
  });
