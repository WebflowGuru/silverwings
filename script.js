
//GSAP clip-path animation
// timelines
var tl = gsap.timeline({paused:true})
var tl2 = gsap.timeline({paused:true})
var tl3 = gsap.timeline({paused:true})
var tl4 = gsap.timeline({paused:true})
var tl5 = gsap.timeline({paused:true})
var tl6 = gsap.timeline({paused:true})
var tl7 = gsap.timeline({paused:true})
var tl8 = gsap.timeline({paused:true})
var tl9 = gsap.timeline({paused:true})
//variables
const circleone = document.querySelector('.circle-one')
const circletwo = document.querySelector('.circle-two')
const circlethree = document.querySelector('.circle-three')
const circlefour = document.querySelector('.circle-four')
const circlefive = document.querySelector('.circle-five')
const circlesix = document.querySelector('.circle-six')
const circletwenty = document.querySelector('.circle-seven')
const circleteight = document.querySelector('.circle-eight')
const circlenine = document.querySelector('.circle-nine')
const plane1 = document.querySelector('.plane-one')
const plane2 = document.querySelector('.plane-two')
const plane3 = document.querySelector('.plane-three')
const plane4 = document.querySelector('.plane-four')
const planefive = document.querySelector('.plane-five')
const planesix = document.querySelector('.plane-six')
const planeseven = document.querySelector('.plane-seven')
const planeeight = document.querySelector('.plane-eight')
const planenine = document.querySelector('.plane-nine')

if ($(window).width() <= 767) 
{
// mobile devices
//tmeline 1
tl.to(circlethree, { display: 'block', duration:0});
tl.to(circletwo, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl.to(circleone, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});
//timeline2
tl2.to(circlefour, { display: 'block', duration:0});
tl2.to(circlethree, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl2.to(circletwo, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});
//timeline 3
tl3.to(circlefour, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl3.to(circlethree, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});
//timeline 4
tl4.to(circleone, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl4.to(circlefour, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});

//timeline 5
tl5.to(circlesix, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl5.to(circlefive, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});


}
// Tabs
else if ($(window).width() <= 991) 
{
//tmeline 1
tl.to(circlethree, { display: 'block', duration:0});
tl.to(circletwo, {clipPath: 'circle(96% at 50% 72%)', webkitClipPath: 'circle(96% at 50% 72%)', duration:1, ease: Power1.easeInOut});
tl.to(circleone, {clipPath: 'circle(2rem at 50% 72%)', webkitClipPath: 'circle(2rem at 50% 72%)', duration:0});

//timeline2
tl2.to(circlefour, { display: 'block', duration:0});
tl2.to(circlethree, {clipPath: 'circle(96% at 50% 72%)', webkitClipPath: 'circle(96% at 50% 72%)', duration:1, ease: Power1.easeInOut});
tl2.to(circletwo, {clipPath: 'circle(2rem at 50% 72%)', webkitClipPath: 'circle(2rem at 50% 72%)', duration:0});

//timeline 3
tl3.to(circlefour, {clipPath: 'circle(96% at 50% 72%)', webkitClipPath: 'circle(96% at 50% 72%)', duration:1, ease: Power1.easeInOut});
tl3.to(circlethree, {clipPath: 'circle(2rem at 50% 72%)', webkitClipPath: 'circle(2rem at 50% 72%)', duration:0});

//timeline 4
tl4.to(circleone, {clipPath: 'circle(96% at 50% 72%)', webkitClipPath: 'circle(96% at 50% 72%)', duration:1, ease: Power1.easeInOut});
tl4.to(circlefour, {clipPath: 'circle(2rem at 50% 72%)', webkitClipPath: 'circle(2rem at 50% 72%)', duration:0});
}

//timeline 5
tl5.to(circlefive, { display: 'block', duration:0});
tl5.to(circlesix, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl5.to(circlefive, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});

// IPad Pro
else if ($(window).width() <= 1024)  {
//tmeline 1
tl.to(circlethree, { display: 'block', duration:0});
tl.to(circletwo, {clipPath: 'circle(100% at 50% 67%)', webkitClipPath: 'circle(100% at 50% 67%)', duration:1, ease: Power1.easeInOut});
tl.to(circleone, {clipPath: 'circle(2rem at 50% 67%)', webkitClipPath: 'circle(2rem at 50% 67%)', duration:0});
//timeline2
tl2.to(circlefour, { display: 'block', duration:0});
tl2.to(circlethree, {clipPath: 'circle(100% at 50% 67%)', webkitClipPath: 'circle(100% at 50% 67%)', duration:1, ease: Power1.easeInOut});
tl2.to(circletwo, {clipPath: 'circle(2rem at 50% 67%)', webkitClipPath: 'circle(2rem at 50% 67%)', duration:0});
//timeline 3
tl3.to(circlefour, {clipPath: 'circle(100% at 50% 67%)', webkitClipPath: 'circle(100% at 50% 67%)', duration:1, ease: Power1.easeInOut});
tl3.to(circlethree, {clipPath: 'circle(2rem at 50% 67%)', webkitClipPath: 'circle(2rem at 50% 67%)', duration:0});
//timeline 4
tl4.to(circleone, {clipPath: 'circle(100% at 50% 67%)', webkitClipPath: 'circle(100% at 50% 67%)', duration:1, ease: Power1.easeInOut});
tl4.to(circlefour, {clipPath: 'circle(2rem at 50% 67%)', webkitClipPath: 'circle(2rem at 50% 67%)', duration:0});
}

//timeline 5
tl5.to(circlefive, { display: 'block', duration:0});
tl5.to(circlesix, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl5.to(circlefive, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});

// Desktop
else if ($(window).width() >= 1025)  {
//tmeline 1
tl.to(circlethree, { display: 'block', duration:0});
tl.to(circletwo, {clipPath: 'circle(96% at 50% 75%)', webkitClipPath: 'circle(96% at 50% 75%)', duration:1, ease: Power1.easeInOut});
tl.to(circleone, {clipPath: 'circle(2rem at 50% 75%)', webkitClipPath: 'circle(2rem at 50% 75%)', duration:0});
//timeline2
tl2.to(circlefour, { display: 'block', duration:0});
tl2.to(circlethree, {clipPath: 'circle(96% at 50% 75%)', webkitClipPath: 'circle(96% at 50% 75%)', duration:1, ease: Power1.easeInOut});
tl2.to(circletwo, {clipPath: 'circle(2rem at 50% 75%)', webkitClipPath: 'circle(2rem at 50% 75%)', duration:0});
//timeline 3
tl3.to(circlefour, {clipPath: 'circle(96% at 50% 75%)', webkitClipPath: 'circle(96% at 50% 75%)', duration:1, ease: Power1.easeInOut});
tl3.to(circlethree, {clipPath: 'circle(2rem at 50% 75%)', webkitClipPath: 'circle(2rem at 50% 75%)', duration:0});
//timeline 4
tl4.to(circleone, {clipPath: 'circle(96% at 50% 75%)', webkitClipPath: 'circle(96% at 50% 75%)', duration:1, ease: Power1.easeInOut});
tl4.to(circlefour, {clipPath: 'circle(2rem at 50% 75%)', webkitClipPath: 'circle(2rem at 50% 75%)', duration:0});

//timeline 5
tl5.to(circlefive, { display: 'block', duration:0});
tl5.to(circlesix, {clipPath: 'circle(114% at 70% 75%)', webkitClipPath: 'circle(114% at 70% 75%)', duration:1, ease: Power1.easeInOut});
tl5.to(circlefive, {clipPath: 'circle(2rem at 85% 82%)', webkitClipPath: 'circle(2rem at 85% 82%)', duration:0});

}


var current_plane = 1;
//click triggers
 //trigger1
plane1.addEventListener('click', () => {
    current_plane = 2;
	tl.restart()
})
 //trigger2
plane2.addEventListener('click', () => {
    current_plane = 3;
	tl2.restart()
})
 //trigger3
plane3.addEventListener('click', () => {
    current_plane = 4;
	tl3.restart();
})
 //trigger4
plane4.addEventListener('click', () => {
    current_plane = 1;
	tl4.restart();
})

//trigger5
planefive.addEventListener('click', () => {
    current_plane = 6;
	tl5.restart()
})

//z-index
document.addEventListener('DOMContentLoaded', () => {
// on plane-one click
 document.querySelectorAll('.plane-one').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    //add class
    document.querySelectorAll('.circle-three').forEach(target => target.classList.add('z-index-high')); 
    });
 });
 // on plane-two click
 document.querySelectorAll('.plane-two').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    //add class
    document.querySelectorAll('.circle-four').forEach(target => target.classList.add('z-index-high'));
    //remove class  
    document.querySelectorAll('.circle-one').forEach(target => target.classList.remove('z-index-high'));
    document.querySelectorAll('.circle-two').forEach(target => target.classList.remove('z-index-high'));
    document.querySelectorAll('.circle-three').forEach(target => target.classList.remove('z-index-high'));
    });
 });
 // on plane-three click
 document.querySelectorAll('.plane-three').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    //add class
    document.querySelectorAll('.circle-one').forEach(target => target.classList.add('z-index-high')); 
    //remove class  
    document.querySelectorAll('.circle-four').forEach(target => target.classList.remove('z-index-high'));
    });
 });
  // on plane-four click
 document.querySelectorAll('.plane-four').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    //add class
    document.querySelectorAll('.circle-two').forEach(target => target.classList.add('z-index-high')); 
    });
 });

 setInterval( function() {
    if(current_plane == 1) {
        current_plane = 2;
        $(".plane-one").click()
    } else if(current_plane==2) {
        current_plane = 3;
        $(".plane-two").click()
    } else if(current_plane==3) {
        current_plane = 4;
        $(".plane-three").click()
    } else if(current_plane==4) {
        current_plane = 5;
        $(".plane-four").click()
    } else if(current_plane==5) {
        current_plane = 6;
        $(".plane-five").click()
    } else if(current_plane==6) {
        current_plane = 7;
        $(".plane-six").click()
    } else if(current_plane==7) {
        current_plane = 8;
        $(".plane-seven").click()
    } else if(current_plane==8) {
        current_plane = 9;
        $(".plane-eight").click()
    } else if(current_plane==9) {
        current_plane = 1;
        $(".plane-nine").click()
    }
 } , 6000 )
});
