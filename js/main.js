const slidShow = document.querySelector(".slidShow");

setInterval(() => {
  const firstImage = slidShow.firstElementChild;
  const thirdImage = slidShow.children[3];

  thirdImage.classList.add("skalUpThirdImage");
  thirdImage.previousElementSibling.classList.remove("skalUpThirdImage");

  firstImage.classList.add("fadeOut-image");

  setTimeout(() => {
    slidShow.removeChild(firstImage);
    slidShow.appendChild(firstImage);

    setTimeout(() => {
      firstImage.classList.remove("fadeOut-image");
    }, 20);
  }, 500);
}, 3000);
