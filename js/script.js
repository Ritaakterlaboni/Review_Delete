let mainscreen = document.querySelector(".mainscreen");
let review = document.querySelector(".review");
let review_box= document.querySelector("#review_box");
let Btn= document.querySelector(".Btn");
let resetBtn = document.querySelector(".resetBtn");



Btn.addEventListener("click", function(){
    if(review_box.value == ""){
        alert("Please Write Your Review. ");
    }
    else{
       let Revie = document.createElement("p") ;                 //addenen ar bhitore p tag create korsi tai joto bar button a click korbe toto p tag hobe
       Revie.textContent = review_box.value;
       review.appendChild(Revie); 
       review_box.value = "";
       Revie.style.fontSize = "22px";

    }
});



resetBtn.addEventListener("click", function(){      
   if(review.querySelectorAll("p").length === 0){       ///jehetu p tag create hobe click korle tai logic ta amon j jodi sei review te kno p tag thake taile msg ta asbe jodi akta o na thae taile msg asbe r joto gulo p tag agula ke legnth hisebe dorte hobe karon agula array ar moto hoi
    alert("I Can't See Anything!");
   }
   else{
        
 let reset = review.querySelectorAll("p") ;          //html thake p tag dhorbe na review div ar modde joto p tag thakbe se guli dhorbe
    reset.forEach(p => p.remove());                 //forEach diye akta akta kore p tag remove korbe
   }
});

//next ar part

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let secondScreen = document.getElementById("secondScreen");

next.addEventListener("click", ()=>{
    mainscreen.style.display = "none";
    secondScreen.style.display = "block";
});
previous.addEventListener("click", ()=>{
   mainscreen.style.display = "block";
    secondScreen.style.display = "none";
});








//delete part



let paragraph = document.getElementById("paragraph");
let inputDlt = document.getElementById("inputDlt");
let deleteBtn = document.getElementById("deleteBtn");



inputDlt.addEventListener("keyup", () => {
    if (inputDlt.value === "Delete") {
        deleteBtn.removeAttribute("disabled");
        deleteBtn.style.background = "linear-gradient(to right, #4C01E0, #7A1FE1)";
    } else {
        deleteBtn.setAttribute("disabled", true);
        deleteBtn.style.background = ""; // Optional: Reset background
    }
});



    deleteBtn.addEventListener("click", () => {
  paragraph.style.display = "none";


});

