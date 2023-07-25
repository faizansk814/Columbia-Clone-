let goToAccc = document.getElementById("go-to-account");
let curUsr = JSON.parse(localStorage.getItem("current-user"));
ServerStart()
function ServerStart(){
   fetch("https://json-server-4o7r.onrender.com/mens")
   .then((res)=>{
      return res.json()
   })
   .then((data)=>{
      console.log(data)
   })
   .catch((err)=>{
      console.log(err)
   })
}
goToAccc.addEventListener("click", ()=>{
   if(curUsr == null){
      window.location.href = "./logIn.html";
   }else{
      window.location.href = "./account.html";
   }
})


let searchForm= document.querySelector("form");
  searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let SearchInp= searchForm.search.value;
     if(SearchInp=="Men"){
        window.location.href="./mens.html"
     }
     else if(SearchInp=="men"){
        window.location.href="./mens.html"
     }
     else if(SearchInp=="MEN"){
        window.location.href="./mens.html"
     }
     else if(SearchInp=="Kids"){
        window.location.href="./kids.html"
     }
     else if(SearchInp=="kids"){
        window.location.href="./kids.html"
     }
     else if(SearchInp=="KIDS"){
        window.location.href="./kids.html"
     }else{
        
       
      tempAlert("Not Match" ,2000)
        
     
       
      //   window.location.href="./index.html"
     }
    
     
  });
  function tempAlert(msg,duration)
  {
   var el = document.createElement("div");
   el.setAttribute("style","position:absolute;top: 0px;left:40%;background-color:#333030; width:300px; height:200px;padding-left:100px; color:white; padding-top:80px; font-size:20px; z-index:3; border-radius:5px") ;
   el.innerHTML = msg;
   setTimeout(function(){
    el.parentNode.removeChild(el);
   },duration);
   document.body.appendChild(el);
  }