const placeForPhotos = document.getElementById("photos"),
  placeForText = document.getElementById("text");

window.addEventListener("DOMContentLoaded", () => {
  let xhr = new XMLHttpRequest(),
    url = "https://jsonplaceholder.typicode.com/photos";
  xhr.open("GET", url), xhr.send();
  xhr.onload = function () {
    let cardObj = JSON.parse(xhr.response),
      littleArray = cardObj.slice(0, 6);
    littleArray.forEach((imgAndTitle) => {
      let images = document.createElement("img");
      images.setAttribute("src", `'${imgAndTitle.url}'`);
      images.setAttribute("alt", "");
      images.setAttribute("height", "100px");
      images.setAttribute("width", "100px");

      let text = document.createElement("div");
      text.innerHTML = `${imgAndTitle.title}`;
      document.placeForText.appendChild(text);
      document.placeForPhotos.appendChild(images);
    });
  };

  window.addEventListener("scroll", function () {
    let block = document.getElementById("infinite-scroll"),
      contentHeight = block.offsetHeight,
      yOffset = window.pageYOffset,
      windowHeight = window.innerHeight,
      y = yOffset + windowHeight;

    if (y >= contentHeight) {
      let xhr = new XMLHttpRequest(),
        url = "https://jsonplaceholder.typicode.com/photos";
      xhr.open("GET", url), xhr.send();
      xhr.onload = function () {
        let cardObj = JSON.parse(xhr.response);
        let bigArray = cardObj.slice(7, cardObj.length);
        bigArray.forEach((imgAndTitle) => {
          let images = document.createElement("img");

          images.setAttribute("src", `'${imgAndTitle.url}'`);
          images.setAttribute("alt", "");
          images.setAttribute("height", "100px");
          images.setAttribute("width", "100px");

          let text = document.createElement("div");
          text.innerHTML = `${imgAndTitle.title}`;
          document.placeForText.appendChild(text);
          document.placeForPhotos.appendChild(images);
        });
      };
    }
  });
});
