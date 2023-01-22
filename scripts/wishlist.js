let mainHtml=document.getElementById("container");
var list=JSON.parse(localStorage.getItem("wish"))||[]
let itemobj=[]

// renderCard(itemobj)
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
            btn.innerText="Add to Cart"
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

