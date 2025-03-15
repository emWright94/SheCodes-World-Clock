function updateTimeDate() {
  //greenwich
  let greenwichElement = document.querySelector("#greenwich");
  let greenwichDateElement = greenwichElement.querySelector(".date");
  let greenwichTimeElement = greenwichElement.querySelector(".time");
  let greenwichBaseTime = moment().tz("Greenwich");

  greenwichDateElement.innerHTML = greenwichBaseTime.format("MMMM Do YYYY");
  greenwichTimeElement.innerHTML = greenwichBaseTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //boston
  let bostonElement = document.querySelector("#boston");
  let bostonDateElement = bostonElement.querySelector(".date");
  let bostonTimeElement = bostonElement.querySelector(".time");
  let bostonBaseTime = moment().tz("America/New_York");

  bostonDateElement.innerHTML = bostonBaseTime.format("MMMM Do YYYY");
  bostonTimeElement.innerHTML = bostonBaseTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //phoenix
  let phoenixElement = document.querySelector("#phoenix");
  let phoenixDateElement = phoenixElement.querySelector(".date");
  let phoenixTimeElement = phoenixElement.querySelector(".time");
  let phoenixBaseTime = moment().tz("America/Phoenix");

  phoenixDateElement.innerHTML = phoenixBaseTime.format("MMMM Do YYYY");
  phoenixTimeElement.innerHTML = phoenixBaseTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace();
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="citySection"
          <div class="leftSide">
            <h2 class="city">${cityTimeZone}</h2>
            <h3 class="date">${cityTime.format("MMMM Do YYYY")}</h3>
          </div>
          <div class="rightSide">
            <h2 class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small>
            </h2>
          </div>
        </div>`;
}

updateTimeDate();
setInterval(updateTimeDate, 1000);

//dropdown
let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);
