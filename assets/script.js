const room = document.querySelector("#space");

const button = document.querySelector("#btn");

function blastOff() {
  let requestUrl =
    "https://api.nasa.gov/planetary/apod?api_key=1X7IFLdDZ3eBsOMix8bFmOge0yb0UZjWo3DgGbX1";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      button.setAttribute("style", "display: none");

      let sPic = document.createElement("img");
      let sTitle = document.createElement("h1");
      let sDescription = document.createElement("p");

      sPic.setAttribute(
        "src",
        "https://apod.nasa.gov/apod/image/2110/SH2-308NS_1024.jpg"
      );
      sTitle.textContent = data.title;
      sDescription.textContent = data.explanation;

      sPic.setAttribute("style", "width: 75%");
      sTitle.setAttribute("style", "color: white");
      sDescription.setAttribute("style", "color: white");

      room.classList.add("room");
      room.appendChild(sPic);
      room.appendChild(sTitle);
      room.appendChild(sDescription);
    });
}

button.addEventListener("click", blastOff);
