const getColor = () =>{
    //to generate random we have to generate hex color code
   const randomNumber = Math.floor(Math.random() * 16777215)
   const colorCode = "#" + randomNumber.toString(16)
   //console.log(randomNumber , colorCode)
   document.getElementById("box").style.backgroundColor = colorCode;
   const randomNumber1 = Math.floor(Math.random() * 16777215)
   const colorCode1 = "#" + randomNumber1.toString(16)
   //console.log(randomNumber1 , colorCode1)
   document.getElementById("button").style.borderColor = colorCode1;
   document.getElementById("bg").innerText=colorCode
   document.getElementById("bd").innerText=colorCode1
}
//event call
document.getElementById("button").addEventListener("click",getColor)

//initial call
getColor()