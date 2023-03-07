console.log("hello");

alert ("Hey there! Drag the blocks to figure out the word to continue this site. If images look out of place, try zooming in or out!");

$(document).ready(function () {
  $("#t1").show("slower");
  $("#t2").show("slower");
});

$(".blocks").draggable({ snap: "#empty1, #empty2, #empty3" });
// $("#t3").draggable();


const animation_elements = document.querySelectorAll('.animate-on-scroll');



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
    else {
      // entry.target.classList.remove('animate');
    }
  })
}, {
  threshold: 0.5
});

for (let i=0; i< animation_elements.length; i++){
  const el = animation_elements[i];

  observer.observe(el);
}