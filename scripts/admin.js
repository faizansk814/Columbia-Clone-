let displayTotalProducts = document.getElementById("display-totol-products");

let logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
})
let nameinp=document.getElementById('product-name')
let image1inp=document.getElementById('image-1')
let image2inp=document.getElementById('image-2')
let priceinp=document.getElementById('price')
let addpro=document.getElementById('add-employee')

// update product
let upid=document.getElementById('update-employee-id')
let upname=document.getElementById('update-product-name')
let upimage1=document.getElementById('update-image-1')
let upimage2=document.getElementById('update-image-2')
let upprice=document.getElementById('update-price')
let updatebtn=document.getElementById('update-employee')
//update price
let updateScoreEmpId=document.getElementById('update-score-product-id')
let updateScoreEmpSalary=document.getElementById('update-score-product-price')
let updateScoreEmpSalaryButton=document.getElementById('update-score-employee')

addpro.addEventListener('click',async function(){
    try {
        let obj={
            name:nameinp.value,
            image1:image1inp.value,
            image2:image2inp.value,
            price:priceinp.value
        }
        let res=await fetch("https://json-server-4o7r.onrender.com/sale",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        let data=await res.json()
    } catch (error) {
        console.log(error)
    }
})
updatebtn.addEventListener('click',async function(){
    try {
        const idinp=upid.value;
        const upnameinp=upname.value;
        const upimage1inp=upimage1.value;
        const upimage2inp=upimage2.value;
        const uppriceinp=upprice.value;
        
    
    
        const a = await fetch(`https://json-server-4o7r.onrender.com/sale/${idinp}`,{
          method:"PUT",
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify({id:idinp,name:upnameinp,image1:upimage1inp,imag2:upimage2inp,price:uppriceinp})
    
        })
        
    } catch (error) {
        console.log(error)
    }
})
updateScoreEmpSalaryButton.addEventListener("click", async function () {
    try {
      let id=updateScoreEmpId.value;
      let upsalary=updateScoreEmpSalary.value;
      const a=await fetch(`https://json-server-4o7r.onrender.com/sale/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({price:upsalary})
      })
      if(a.ok==true){
        fetchAndRenderEmployees()
      }
    } catch (error) {
      console.log(error)
    }
})