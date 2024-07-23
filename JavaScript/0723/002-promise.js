// promise
const req = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      const result = requestObj.responseText;
      resolve(result);
    } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
      reject("요청 실패");
    }
  };
  requestObj.send();
});

req
  .then((result) => {
    console.log(JSON.parse(result));
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
