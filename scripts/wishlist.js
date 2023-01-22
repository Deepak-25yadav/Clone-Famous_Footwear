let mainHtml=document.getElementById("container");
var list=JSON.parse(localStorage.getItem("wish"))||[]
var add=JSON.parse(localStorage.getItem("add"))||[]
let cart_data=JSON.parse(localStorage.getItem("cart_data_list"))||[];
let favourite_data=JSON.parse(localStorage.getItem("favourite_data_list"))||[];
showKid(favourite_data)
window.addEventListener("load",()=>{
    show(list)
})
function show(data){
    let temp;
    
    temp=data.map((item)=>{
        fetch(`https://63c7081e4ebaa80285528ba1.mockapi.io/user/product/${item.id}`)
        .then((res)=>res.json())
        .then((data)=>{
            
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
            let btn=document.createElement("button");
            btn.setAttribute("class","btn");
            btn.setAttribute("data-id",data.id)
            btn.innerText="Add to Cart"
            btn.addEventListener("click",(e)=>{
                e.preventDefault();
                let dataId=e.target.dataset.id
                for(let i=0;i<list.length;i++){
                    
                    if(list[i].id==dataId){
                        mainHtml.innerHTML=""
                        add.push(list.splice(i,1))
                        localStorage.setItem("add",JSON.stringify(add));
                        localStorage.setItem("wish",JSON.stringify(list));
                        show(list)
                        break;
                    }
                }
            })
            let remove=document.createElement("button");
            remove.setAttribute("class","remove");
            remove.setAttribute("data-id",data.id)
            remove.innerText="Remove"

            remove.addEventListener("click",(e)=>{
                e.preventDefault()
                let dataId=e.target.dataset.id
                for(let i=0;i<list.length;i++){
                    
                    if(list[i].id==dataId){
                        mainHtml.innerHTML=""
                        list.splice(i,1)
                        
                        localStorage.setItem("wish",JSON.stringify(list));
                        show(list)
                        break;
                    }
                }
            })
            div3.append(h3,p1,p2,h4,btn,remove);
            div.append(div2,div3);
            mainHtml.append(div)

        })
    })
    
}

function showKid(data){
    data.map((item,index)=>{
        let div=document.createElement("div")
            div.setAttribute("class","card");
            let div2=document.createElement("div")
            div2.setAttribute("class","img")
            
            let img=document.createElement("img");
            img.setAttribute("src",item.img);
            div2.append(img)
            let div3=document.createElement("div")
            div3.setAttribute("class","body");
            let h3=document.createElement("h3")
            h3.innerText=item.name;
            let p1=document.createElement("p")
            p1.innerText=item.desc;
            let p2=document.createElement("p");
            p2.innerText="Size: "+item.size;
            let h4=document.createElement("h4");
            h4.innerText="$"+item.price;
            let btn=document.createElement("button");
            btn.setAttribute("class","btn");
            btn.setAttribute("data-id",data.id)
            btn.innerText="Add to Cart"
            btn.addEventListener("click",(e)=>{
                // e.preventDefault()
                // mainHtml.innerHTML=""
                // let temp;
                // temp=favourite_data.splice(index,1)
                // favourite_data.splice(index,1)
                // cart_data.push(temp)
                // showKid(favourite_data)
                // localStorage.setItem("cart_data_list", JSON.stringify(cart_data));
            })
            let remove=document.createElement("button");
            remove.setAttribute("class","remove");
            remove.setAttribute("data-id",data.id)
            remove.innerText="Remove"

            remove.addEventListener("click",(e)=>{
                mainHtml.innerHTML=""
                e.preventDefault();
                favourite_data.splice(index,1)
                showKid(favourite_data)
                localStorage.setItem("favourite_data_list", JSON.stringify(favourite_data));
            })
            div3.append(h3,p1,p2,h4,btn,remove);
            div.append(div2,div3);
            mainHtml.append(div)

    })
}