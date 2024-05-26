const input=document.getElementById("input")
const mm=document.getElementById("list");
document.getElementById("button-addon2").addEventListener("click",function(){
    if(input.value=== ""){
        alert("your input is empty")
    }else{
        const list=document.createElement("li");
        list.textContent=input.value;
        list.classList.add("list-group-item","category-tag")
        mm.appendChild(list)
    }
    input.value=""
    save()
})
list.addEventListener("click",function(e){
// e.target.remove();
e.target.style.textDecoration="line-through"
save()

})

document.addEventListener("keydown",function(e){
if(e.key === "Enter"){
    if(input.value === ""){
        alert("your input is empty")
        
    }else{
    const list=document.createElement("li");
    list.textContent=input.value;
    list.classList.add("list-group-item","category-tag")
    mm.appendChild(list) 
    input.value=""
    save()
    
}
}

})
function save(){
    localStorage.setItem("data", mm.innerHTML)
}
function red(){
    mm.innerHTML=localStorage.getItem("data")
}
red()


document.addEventListener("DOMcontentloaded",function);
const form=document.querySelector("form")
form.addEventListener("submit",function(e){

if(e.target.input.value==="")
    e.target.("your input is empty") 


})