let dish = document.querySelector("#dish");

let tot = document.querySelector("#tot");

tot.addEventListener("input",()=>{
    // console.log(nam);
    let dish = document.querySelector("#dish");
    // console.log("total items",tot.value);
    let count = parseInt(tot.value); 
    console.log(dish.value,"dish");
    let price = document.querySelector("#price");
    let food = dish.value.trim();
    console.log("food",food);
        
    if(food.toLowerCase()=="masala dosa"){
        price.value = 80*count;
        console.log(price.value);
    } else if(food.toLowerCase()=="cheese dosa"){
        price.value = 75*count;
    } else if(food.toLowerCase()=="ghee roast"){
        price.value = 110*count;
    } else if(food.toLowerCase()=="plain uthappam"){
        price.value = 60*count;
    }else if(food.toLowerCase()=="onion uothappam"){
        price.value = 70*count;
    }else if(food.toLowerCase()=="carrot uothappam"){
        price.value = 80*count;
    }else if(food.toLowerCase()=="tomato uothappam"){
        price.value = 80*count;
    }else if(food.toLowerCase()=="idly"){
        price.value = 15*count;
        console.log("price = ",price.value);
        
    }else if(food.toLowerCase()=="poori"){
        price.value = 20*count;
    }else if(food.toLowerCase()=="tea"){
        price.value = 15*count;
    }else if(food.toLowerCase()=="coffee"){
        price.value =20*count;
    }else if(food.toLowerCase()=="fresh lime"){
        price.value =40*count;
    }else if(food.toLowerCase()=="boost"){
        price.value = 30*count
    }else if(food.toLowerCase()=="horlicks"){
        price.value = 30*count;
    }
})

let butt = document.querySelector("#submitbutton");
butt.addEventListener("click",()=>{
    alert(`Your order is on the way! Hope you will enjoy the meal`);
    let inp = document.querySelectorAll("input");
    console.log(inp);
    for(let i of inp){
        i.value = "";
    }
});