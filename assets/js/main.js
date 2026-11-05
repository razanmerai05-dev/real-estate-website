let mobile_nav_icon=document.getElementById("mobile-nav-icon");
let aside=document.getElementById("aside");

mobile_nav_icon.addEventListener("click" ,()=>{
    if(aside.style.right==="0px"){
        aside.style.right="-280px";
    }else{
        aside.style.right="0px";
    }
});

document.addEventListener("click",(e)=>{
    if(!aside.contains(e.target) && e.target !== mobile_nav_icon){
        aside.style.right="-280px";
    }
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let btns = document.querySelectorAll(".filter li");
let products = document.querySelectorAll(".product");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        let filterClass = e.currentTarget.getAttribute("data-filter");

        products.forEach((product) => {
            if (filterClass === "all" || product.classList.contains(filterClass.replace('.', ''))) {
                product.classList.remove("hide");
            } else {
                product.classList.add("hide");
            }
        });
    });
});








