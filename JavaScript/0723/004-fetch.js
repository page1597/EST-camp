let result = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
result
  .then((res) => {
    console.log(res); // Response 객체
    console.log(res.json()); // Promise 객체 > JSON 데이터 파싱이 비동기적으로 작동
    return res.json(); // fetch에서 적용
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  });
