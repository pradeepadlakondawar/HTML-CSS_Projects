let cursor = document.querySelector("#cursor");
let cursor_blur = document.querySelector("#cursor-blur");
document.addEventListener('mousemove',(e)=>{
    // console.log(e.x);
    cursor.style.left =e.x+30+"px";
    cursor.style.top =e.y+"px";
    cursor_blur.style.left =e.x-200+"px";
    cursor_blur.style.top =e.y-200+"px";

})

let navh4= document.querySelectorAll("#nav h4");
navh4.forEach(function(elm){
    elm.addEventListener('mouseenter', function(){
        cursor.style.scale=3;
        cursor.style.border="1px solid #95C11E";
        cursor.style.backgroundColor="transparent"
    })
    elm.addEventListener('mouseleave', function(){
        cursor.style.scale=1;
        cursor.style.border="0px solid #95C11E";
        cursor.style.backgroundColor="#95C11E"
    })
})
 
gsap.to("#nav",{
    backgroundColor: "#000",
    height:"100px",
    delay: 0.5,
    scrollTrigger:{
        trriger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
}) 
gsap.to("#main",{
    backgroundColor: "#000",
   
    scrollTrigger:{
        trriger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
}) 

gsap.from("#about-us img, #about-is-in", {
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

