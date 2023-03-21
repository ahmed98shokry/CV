/*=================== toggle style switcher ===================*/
const lo = document.querySelector(".loon");
lo.addEventListener("click", () => {
    document.querySelector(".lo").classList.toggle("open");
})


//hide style - switcher on scroll

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".lo").classList.contains("open"))
    {
        document.querySelector(".lo").classList.remove("open")
    }
})
/*=================== theme color ===================*/
const movr = document.querySelectorAll(".movr");
function setActiveStyle(color)
{
  movr.forEach ((style) =>{
    if(color === style.getAttribute("enwan"))
    {
        style.removeAttribute("disabled");
    }
    else
    {
        style.setAttribute("disabled","true");
    }
  })
}
/*=================== theme light and Dark mooo ===================*/
const ddark = document.querySelector(".ddark");
ddark.addEventListener("click", () => {
    ddark.querySelector("i").classList.toggle("fa-sun");
    ddark.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
Window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        ddark.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        ddark.querySelector("i").classList.add("fa-moon");
    }
})
