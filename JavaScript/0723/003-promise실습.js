const req = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      resolve(requestObj.responseText);
    } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
      reject(requestObj.response);
    }
  };
  requestObj.send();
});

req
  .then((result) => {
    const parsedData = JSON.parse(result);
    const displayData = JSON.stringify(parsedData, null, 3);
    document.body.innerHTML = `<pre>${displayData}</pre>`;
  })
  .catch((error) => {
    console.log(`에러: ${error}`);
    document.body.innerText = error;
  });
