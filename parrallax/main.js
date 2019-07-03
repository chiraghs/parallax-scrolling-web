function parallax(element, distance, speed) {
 const item = document.querySelector(element);
 item.style.transform = `translateY(${distance*speed}px)`;
}
 window.addEventListener("scroll",function(){
     parallax("header", window.scrollY, 1);
     parallax(".tshirt", window.scrollY,- 0.8);
     parallax(".tshirt1", window.scrollY,- 0.6);
     parallax(".tshirt2", window.scrollY,- 0.4);
     parallax(".tshirt3", window.scrollY,- 0.2);
     parallax(".text2", window.scrollY,- 0.1);
 });