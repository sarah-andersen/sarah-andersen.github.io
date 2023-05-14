
let width = window.innerWidth
let svgholder = document.getElementById("svgholder");

// create counter like let n=0
// create empty list in which you'll put ids of stuff you click

svgholder.addEventListener('load', function()
{
    let circles = svgholder.contentDocument.querySelectorAll('circle')
    circles.forEach(element => {
        // every time you click, you add to the list the id of teh thing you clicked
        // check if element id isin list of ids
            // if not, counter + 1
                // document getElement by Id .text - > counter
            // if it is counter doesn't move
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