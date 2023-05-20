
// let width = window.innerWidth
let svgholder = document.getElementById("svgholder");

//counter variable
let CounterObject = document.getElementById("num-changing")
let CounterValue = 0

const ListCircles = [];

svgholder.addEventListener('load', function()
{
    let circles = svgholder.contentDocument.querySelectorAll('circle')
    circles.forEach(element => {

  element.style.fill='transparent'
  element.style.strokeColor = 'transparent'
  element.addEventListener("click", function(){

    if(!(ListCircles.includes(element.id))) {
      this.style.stroke = 'red'
      this.style.strokeWidth = '5px'
      CounterValue = CounterValue+1
      CounterObject.textContent = CounterValue
      ListCircles.push(element.id)
    }

  let Congrats = document.getElementById("congrats");

    if(CounterValue === 20) {
      Congrats.style.visibility = "visible"
    }
         
  });  
});

})