// 요청을 위한 XHR객체 생성
const requestObj = new XMLHttpRequest();
console.log(requestObj.readyState); // 0

// 요청을 준비(요청을 open) open메서드의 첫번째 요소에는 http method, 두번째에는 요청을 보낼 URL
requestObj.open("GET", "https://test.api.weniv.co.kr/mall"); // 1
console.log(requestObj.readyState);
// 요청 보낼때, 요청 상태가 바뀔때 마다 실행될 콜백함수 설정.
requestObj.onreadystatechange = () => {
  console.log(requestObj.readyState);

  // readystate : 요청을 보내는 클라이언트의 상태를 의미합니다.
  // readystate의 종류
  // 0 (UNSENT) - XHR 객체가 생성되었지만 아직 초기화되지 않았습니다.
  // 1 (OPENED) - open()함수가 호출되어 요청이 초기화되었습니다.
  // 2 (HEADERS_RECEIVED) - send()함수가 호출되었습니다.
  // 3 (LOADING) - 데이터를 다운받는 중 입니다.
  // 4 (DONE) - 통신이 완료되었습니다.
  if (requestObj.readyState === 4 && requestObj.status === 200) {
    const result = requestObj.responseText;
    console.log(JSON.parse(result)[0]);
  }
};
requestObj.send();
// send를 하면 요청이 보내잠. readyState -> 2
// 그리고 요청에 대한 응답을 받기 전에는 readyState -> 3
// 요청에 대한 응답을 받아서 통신이 완료되었을 때는 readyState -> 4

// const requestObj = new XMLHttpRequest();
// request.open("GET", "https://...");
// requestObj.send();
