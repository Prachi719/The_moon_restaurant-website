let but = document.getElementById("book");

// nam.addEventListener("Input",()=>{
//     name2 = nam.value;
//     console.log("input is given");
//     console.log(nam)
// })

but.addEventListener("click",function(){
    let nam = document.querySelector("#name");
    alert(`Thankyou ${nam.value}! Your booking is done`);
    let inp = document.querySelectorAll("input");
    for(let i of inp){
        i.value = "";
    }
});
