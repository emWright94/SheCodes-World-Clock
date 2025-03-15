function updateGreenwichTime() {
  let greenwichElement = document.querySelector("#greenwich");
  let greenwichDateElement = greenwichElement.querySelector(".date");
  let greenwichTimeElement = greenwichElement.querySelector(".time");
  let greenwichBaseTime = moment().tz("Greenwich");

  greenwichDateElement.innerHTML = greenwichBaseTime.format("MMMM Do YYYY");
  greenwichTimeElement.innerHTML = greenwichBaseTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateGreenwichTime();
setInterval(updateGreenwichTime, 1000);

function updateBostonTime() {
  let bostonElement = document.querySelector("#boston");
  let bostonDateElement = bostonElement.querySelector(".date");
  let bostonTimeElement = bostonElement.querySelector(".time");
  let bostonBaseTime = moment().tz("America/New_York");

  bostonDateElement.innerHTML = bostonBaseTime.format("MMMM Do YYYY");
  bostonTimeElement.innerHTML = bostonBaseTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateBostonTime();
setInterval(updateBostonTime, 1000);

function updatePhoenixTime() {
  let phoenixElement = document.querySelector("#phoenix");
  let phoenixDateElement = phoenixElement.querySelector(".date");
  let phoenixTimeElement = phoenixElement.querySelector(".time");
  let phoenixBaseTime = moment().tz("America/Phoenix");

  phoenixDateElement.innerHTML = phoenixBaseTime.format("MMMM Do YYYY");
  phoenixTimeElement.innerHTML = phoenixBaseTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updatePhoenixTime();
setInterval(updatePhoenixTime, 1000);
