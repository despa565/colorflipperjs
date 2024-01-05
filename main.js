const colors=[    "#FF6633",
"#FFB399",
"#FF33FF",
"#FFFF99",
"#00B3E6",
"#E6B333",
"#3366E6",
"#999966",
"#809980",
"#E6FF80",
"#1AFF33",
"#999933",
"#FF3380",
"#CCCC00",
"#66E64D",
"#4D80CC",
"#FF4D4D",
"#99E6E6",          
"#6666FF"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");


btn.addEventListener("click",function()
{

    const randomNumber=getRanomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];

})
function getRanomNumber(){
    return Math.floor(Math.random()*colors.length);
}
