
let width = window.innerWidth
let svgholder = document.getElementById("svgholder");


// create counter like let n=0
// create empty list in which I'll put ids of stuff I have clicked on

svgholder.addEventListener('load', function()
{
    let circles = svgholder.contentDocument.querySelectorAll('circle')
    circles.forEach(element => {
        // every time I click, I add to the list the id of the thing I clicked
        // check if element id is in list of ids
            // if not, counter + 1
                // document getElement by Id .text - > counter
            // if it is counter doesn't move
            //Set


  element.style.fill='transparent'
  element.style.strokeColor = 'transparent'
  element.addEventListener("click", function(){
    this.style.stroke = 'red'
    this.style.strokeWidth = '5px'

  });  
});
// end if counter == 15
// alert (display none or visibility but not opacity)
})