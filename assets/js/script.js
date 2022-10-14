let slides = document.getElementsByClassName("carousel_item");
const carouselBtnLeft = document.getElementById("carousel_arr_left");
const carouselBtnRight = document.getElementById("carousel_arr_right");

let slide_obj = []
let arr_obj = []
slide_length = slides.length - 1
let count = 0

// Store tag list in a group array eg:
// [Array(4), Array(4), Array(4), Array(4), Array(2)]
while (count < slides.length) {
    arr_obj.push(slides[count])
    if (arr_obj.length === 4 || count === (slides.length - 1)) {
        slide_obj.push(arr_obj)
        arr_obj = []
    }
    count += 1
}

// Check how many group of four
let slideIndex = slide_obj.length - 1;
let counter = 0;

const showNextFourItems = (operator) => {
    // Hide all items
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

     // If the event is positive or negative btn, increase or decrease.
    if (operator === "+") {
        counter += 1;
        if (counter > slideIndex) {
            counter = 0;
        }
    } else if (operator === "-") {
        counter -= 1;
        if (counter < 0) {
            counter = slideIndex;
        }
    }

    // Display items on an array.
    for (let tag = 0; tag < slide_obj[counter].length; tag++) {
        let tags_arr = slide_obj[counter][tag];
        tags_arr.style.display = "block";
    }
};

showNextFourItems("+"); // Default

carouselBtnRight.addEventListener("click", () => {
  showNextFourItems("+");
});
carouselBtnLeft.addEventListener("click", () => {
  showNextFourItems("-");
});
