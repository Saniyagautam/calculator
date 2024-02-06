let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let mul=document.getElementById("mul");
let div=document.getElementById("div");
let mod=document.getElementById("mod");
let power=document.getElementById("power");
let ans=document.getElementById("ans");
let reset=document.getElementById("reset");

plus.addEventListener("click",()=>{
    ans.innerText=parseFloat(num1.value)+parseFloat(num2.value);
});
minus.addEventListener("click",()=>{
    ans.innerText=parseFloat(num1.value)-parseFloat(num2.value);
});
mul.addEventListener("click",()=>{
    ans.innerText=parseFloat(num1.value)*parseFloat(num2.value);
});
div.addEventListener("click",()=>{
    ans.innerText=parseFloat(num1.value)/parseFloat(num2.value);
});
mod.addEventListener("click",()=>{
    ans.innerText=parseFloat(num1.value)%parseFloat(num2.value);
});
power.addEventListener("click",()=>{
    ans.innerText=parseFloat(num1.value)**parseFloat(num2.value);
});

reset.addEventListener("click",()=>{
    ans.innerText="";
    num1.value="";
    num2.value="";
})
