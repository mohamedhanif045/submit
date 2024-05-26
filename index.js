document.addEventListener("DOMContentLoaded", function(){
    const form =document.querySelector("form")
    const todolist = document.getElementById("list")
    form.addEventListener("submit", function(e){
        if(e.target.input.value === ""){
            alert("Please enter")
        }else{
        const list=document.createElement("li")
        list.textContent=input.value;
        list.classList.add("list-group-item","category-tag")
        word.appendChild(list)
       

        }
        input.value=""
        
    })
})

 