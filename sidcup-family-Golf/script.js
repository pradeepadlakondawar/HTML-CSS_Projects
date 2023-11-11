let cursor = document.querySelector("#cursor");
let cursor_blur = document.querySelector("#cursor-blur");
document.addEventListener('mousemove',(e)=>{
    // console.log(e.x);
    cursor.style.left =e.x+"px";
    cursor.style.top =e.y+"px";
    cursor_blur.style.left =e.x-200+"px";
    cursor_blur.style.top =e.y-200+"px";

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

