let greaterButton = document.querySelector("#greaterButton")
let lessButton = document.querySelector("#lessButton")
let i = 0;
let img = document.querySelector("#flowerImg")
let imgArr = [
    "image/img_1.jpg",
    "image/img_2.jpg",
    "image/img_3.jpg",
    "image/img_4.jpg",
    "image/img_5.jpg",
]
lessButton.addEventListener("click", () => {
    i++;
    if (i > 4)
        i = 0;
    img.setAttribute("src", imgArr[i]);
})
greaterButton.addEventListener("click", () => {
    i--;                                                                                                                        
    if (i < 0)
        i = 4;
    img.setAttribute("src", imgArr[i]);
})










//   Image Autplay
let checkBox = document.querySelector("#autoplay")
checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        autoplay = setInterval(function () {
            i++;
            if (i > 4) i = 0;
            img.setAttribute("src", imgArr[i]);
        }, 1200);
    } else {
        clearInterval(autoplay);
    }
});


