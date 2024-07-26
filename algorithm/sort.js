var jsonData;
fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
).then(function (response) {
  response.json().then(function (data) {
    jsonData = data;
    let tableBodyData = [];
    for (const iterator of data) {
      tableBodyData.push(`          
                        <tr>
                            <td>${iterator["시·도별(1)"]}</td>
                            <td>${iterator["총인구 (명)"]}</td>
                            <td>${iterator["1차 접종 누계"]}</td>
                            <td>${iterator["2차 접종 누계"]}</td>
                            <td>${iterator["1차 접종 퍼센트"]}</td>
                            <td>${iterator["2차 접종 퍼센트"]}</td>
                        </tr>
                    `);
    }
    document.querySelector("#dataTable > tbody").innerHTML =
      tableBodyData.join("");
  });
});

var click = true;

function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }

  let tableBodyData = [];

  for (const iterator of sortedData) {
    tableBodyData.push(`          
                    <tr>
                        <td>${iterator["시·도별(1)"]}</td>
                        <td>${iterator["총인구 (명)"]}</td>
                        <td>${iterator["1차 접종 누계"]}</td>
                        <td>${iterator["2차 접종 누계"]}</td>
                        <td>${iterator["1차 접종 퍼센트"]}</td>
                        <td>${iterator["2차 접종 퍼센트"]}</td>
                    </tr>
                `);
  }

  document.querySelector("#dataTable > tbody").innerHTML =
    tableBodyData.join("");
}
