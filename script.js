
let input = document.querySelector("#input")

let btn = document.querySelector("#btn")

let img = document.querySelector("#img")

btn.addEventListener('click', e =>{
    
    if(input.value.length>0){
    
        
            img.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`
            img.addEventListener("load",e =>{
               document.querySelector(".wrapper").classList.add("active")
                
            })
        
    }else{
    alert("ورودی خالیه ")
        
    }

})

