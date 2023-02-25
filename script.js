const a = document.querySelector(".fixed")

window.addEventListener("scroll",()=>{
  const scrolled = window.scrollY
  if (scrolled>626) {
    a.classList.remove("hidden")
  } else {
    a.classList.add("hidden")
  }
})

