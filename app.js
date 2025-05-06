let but2 = document.getElementById("submitbutton");
but2.addEventListener("click",function(){
    window.location.href = "book_table.html";
})

let but1 = document.getElementById("booktab");
but1.addEventListener("click",function(){
    window.location.href = "Make_a_order.html";
})


// const hamb = document.getElementsByClassName("hamburger");
// const nav = document.getElementsByClassName("nav");
// ham.addEventListener('click',()=>{
//     nav.classList.toggle('active');
// })

let ham = document.querySelector(".ham");
let nav = document.querySelector(".nav");
console.log(nav);
ham.addEventListener("click",()=>{
     nav.classList.toggle("show");
     console.log(nav);
    
})
