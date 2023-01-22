let main=document.getElementById("item");
let billing=document.getElementById("bill");
var add=JSON.parse(localStorage.getItem("add"))||[]

show(add)
function show(data){
    let amount=0;
    let discount=0;
    let total=0
    for(let i=0;i<data.length;i++){
        let temp;
        
        temp=data[i].map((item)=>{
            fetch(`https://63c7081e4ebaa80285528ba1.mockapi.io/user/product/${item.id}`)
        .then((res)=>res.json())
        .then((data)=>{
            billing.innerHTML="";
            amount+=Number(data.price);
            discount=amount*(0.30)
            total=Math.ceil(amount-discount);
            console.log(amount)
            let div=document.createElement("div")
            div.setAttribute("class","card");
            let div2=document.createElement("div")
            div2.setAttribute("class","img")
            
            let img=document.createElement("img");
            img.setAttribute("src",data.image);
            div2.append(img)
            let div3=document.createElement("div")
            div3.setAttribute("class","body");
            let h3=document.createElement("h3")
            h3.innerText=data.brand;
            let p1=document.createElement("p")
            p1.innerText=data.name;
            let p2=document.createElement("p");
            p2.innerText="Size: "+data.size;
            let h4=document.createElement("h4");
            h4.innerText="$"+data.price;
            let remove=document.createElement("button");
            remove.setAttribute("class","remove");
            remove.setAttribute("data-id",data.id)
            remove.innerText="Remove"

            remove.addEventListener("click",(e)=>{
                e.preventDefault()
                let dataId=e.target.dataset.id
                
                for(let j=0;j<add.length;j++){
                    
                    if(add[i][j].id==dataId){
                        
                        main.innerHTML=""
                        add[i].splice(j,1)
                        
                        
                        
                        localStorage.setItem("add",JSON.stringify(add));
                        show(add)
                        break;
                    }
                }
            })
            div3.append(h3,p1,p2,h4,remove);
            div.append(div2,div3);
            main.append(div)
            let headdiv=document.createElement("h1")
            headdiv.innerText="PRICE DETAILS";
            let div1bill=document.createElement("div")
            div1bill.setAttribute("id","price")
            let p1bill=document.createElement("h4")
            p1bill.innerText=`Price`
            let p2amount=document.createElement("h5")
            p2amount.innerText=Math.ceil(amount);
            div1bill.append(p1bill,p2amount)
            let div2dis=document.createElement("div")
            div2dis.setAttribute("id","discount");
            let p1dis=document.createElement("h4");
            p1dis.innerText="Discount(30%)";
            let p2disprice=document.createElement("h5")
            p2disprice.setAttribute("style","colour:green")
            p2disprice.innerText=`-${Math.ceil(discount)}`;
            div2dis.append(p1dis,p2disprice)
            let div3dile=document.createElement("div");
            let textdiv=document.createElement("h4")
            textdiv.innerText="FREE DELIVERY"
            div3dile.append(textdiv)
            let div4total=document.createElement("div");
            let texttotal=document.createElement("h4");
            texttotal.innerText="Total"
            let showTotal=document.createElement("h5")
            showTotal.innerText="$"+total;
            div4total.append(texttotal,showTotal);
            billing.append(headdiv,div1bill,div2dis,div3dile,div4total)
            
        })
        })
    }
}

