let main = document.getElementById('product')
let selectel=document.getElementById('selected')
let fifty=document.getElementById('fifty')
let hun=document.getElementById('hun')
let one=document.getElementById('over')
let xxs=document.getElementById('xxs')
let xs=document.getElementById('xs')
let s=document.getElementById('s')
let m=document.getElementById('m')
let l=document.getElementById('l')
let xl=document.getElementById('xl')
let curUSr = JSON.parse(localStorage.getItem("current-user"))||[]


let fetched=[]
fetch("https://json-server-4o7r.onrender.com/Rain")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
    fetched=data
    display(data)
})
.catch((err)=>{
    console.log(err)
})
function display(data){
    main.innerHTML=""
    data.map((el,ind)=>{
        let div=document.createElement("div")
        div.setAttribute('class','cards')
        let image1=document.createElement('img')
        image1.src=el.image1
        let image2=document.createElement('img')
        image2.src=el.image2
        image2.setAttribute('class','hide')
        let name=document.createElement('h4')
        name.innerText=el.name
        let price=document.createElement('p')
        price.innerText="$"+el.price
        let btn=document.createElement('button')
        btn.innerText="Add to Cart"
        let Delete=document.createElement('button')
        Delete.innerText="Delete"
        btn.addEventListener('click',function(){
            if(duplicate(el)){
                alert('Product Already in Cart')
              }else{
                  curUSr.cart.push(el);
                localStorage.setItem('current-user',JSON.stringify(curUSr))
                alert('Product Added To Cart');
              }
       })
       Delete.addEventListener('click',function(){
          fetched=fetched.filter((el,i)=>{
            if(ind==i){
              return false
            }else{
              return true
            }
          })
           display(fetched)
        })
        div.append(image1,image2,name,price,btn,Delete)
        main.append(div)
    })
}
function duplicate(ele){
    for(let item of curUSr.cart){
        if(item.name == ele.name){
            return true;
        }
    }
    return false;
}
fifty.addEventListener('click',function(){
    if(fifty.checked){
        let filtered=fetched.filter((el)=>{
            return el.price<50
        })
        display(filtered)
    }
})
hun.addEventListener('click',function(){
    if(hun.checked){
        let filtered=fetched.filter((el)=>{
            return el.price<100
        })
        display(filtered)
    }
})
one.addEventListener('click',function(){
    if(one.checked){
        let filtered=fetched.filter((el)=>{
            return el.price<150
        })
        display(filtered)
    }
})
over.addEventListener('click',function(){
    if(over.checked){
        let filtered=fetched.filter((el)=>{
            return el.price>150
        })
        display(filtered)
    }
})
xxs.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="XXS"
    })
    display(filtered)
})
xs.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="XS"
    })
    display(filtered)
})
s.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="S"
    })
    display(filtered)
})
m.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="M"
    })
    display(filtered)
})
l.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="L"
    })
    display(filtered)
})
xl.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="XL"
    })
    display(filtered)
})