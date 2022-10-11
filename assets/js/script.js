let slides = document.getElementsByClassName("carousel_item");
const carouselBtnLeft = document.getElementById("carousel_arr_left");
const carouselBtnRight = document.getElementById("carousel_arr_right");
  
// Check how many group of four
let slideIndex = Math.ceil(slides.length/4) - 1;
let counter = 0;
let item_count = 0;
let index_0 = 0;

const showNextFourItems = (operator) => {
    let i;
    // Hide all items
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // console.log('counter: ', counter)
    // console.log('slideIndex: ', slideIndex)
    
    // Get counter instance
    if (item_count <= 4 && counter > slideIndex && operator === '+' ){ // Display 4 items on default.
        index_0 = 0 
        item_count = 4
        counter = 0
    }
    else{ // If the event is positive, increase.
        if(operator === '+'){ 
            if (counter) {
                index_0+=4; 
            }
            item_count+=4; 
            counter += 1
         }
        else if(operator === '-'  && item_count >= 4 && counter >= 0){ // If the event is negative, decrease.
            index_0-=4; 
            counter -= 1
            if(item_count > 4){
                item_count-=4;
                console.log('item_count.....: ', item_count)
            }
        }
    }
  
    // console.log('index_0: ', index_0)
    // console.log('item_count+4: ', item_count)
    // console.log('')
      
    // Display 4 items
    for (i = index_0; i <  item_count; i++){
        if (slides[i]){
        slides[i].style.display = "block"; 
        }
    }

    
}

showNextFourItems('+'); // Default
  
carouselBtnRight.addEventListener('click', () =>{
	showNextFourItems('+');           
})
carouselBtnLeft.addEventListener('click', () =>{
	showNextFourItems('-');           
})