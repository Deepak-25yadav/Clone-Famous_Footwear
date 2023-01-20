let product=[];
let mainHtml=document.getElementById("product");
let pagination=document.getElementById("pagination_wrapper");
let sorting=document.getElementById("price");
let boot=document.getElementById("opt1");
let clog=document.getElementById("opt2");
let heel=document.getElementById("opt3")
let loafer=document.getElementById("opt4");
let sandal=document.getElementById("opt5");
let slipper=document.getElementById("opt6");
let sneaker=document.getElementById("opt7");
let work=document.getElementById("opt8");
let brand=document.getElementById("brand");
let material=document.getElementById("material");
let colour=document.getElementById("colour");
// Brand filter functnality
boot.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Boot")
})
clog.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Clog")
})
heel.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Heel")
})
loafer.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Loafer")
})
sandal.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Sandal");
})
slipper.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Slipper")
})
sneaker.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Sneaker")
})
work.addEventListener("click",()=>{
  fetchRenderPro("?limit=10&page=1&category=Work")
})
// Sorting functionality
sorting.addEventListener("change",()=>{
  if(sorting.value=="featured"){
    fetchRenderPro("?limit=10&page=1")

sorting.addEventListener("change",()=>{
  if(sorting.value=="featured"){
    renderCard(product)

  }else if(sorting.value=="high"){
    product.sort((a,b)=>{
      return b.price-a.price;
    })
   renderCard(product)
  }else if(sorting.value=="low"){
    product.sort((a,b)=>{
      return a.price-b.price;
    })
   renderCard(product)
  }else if(sorting.value=="per"){
    let c=product.filter((item)=>{
      return item.percent.length;
    })
    renderCard(c);
  }
  
})

// brand filter functionality
brand.addEventListener("change",()=>{
  
  if(brand.value=="nike"){
    fetchRenderPro("?limit=10&page=1&brand=Nike")
  }else if(brand.value=="timberland"){
    fetchRenderPro("?limit=10&page=1&brand=Timberland")
  }else if(brand.value=="vans"){
    fetchRenderPro("?limit=10&page=1&brand=Vans")
  }else if(brand.value=="skecher"){
    fetchRenderPro("?limit=10&page=1&brand=Skecher")
  }else if(brand.value=="base"){
    fetchRenderPro("?limit=10&page=1")
  }
})
// material
material.addEventListener("change",()=>{
  if(material.value=="base"){
    fetchRenderPro("?limit=10&page=1")
  }else if(material.value=="Canvas"){
    fetchRenderPro("?limit=10&page=1&material=canvas")
  }else if(material.value=="Leather"){
    fetchRenderPro("?limit=10&page=1&material=leather")
  }else if(material.value=="EVA"){
    fetchRenderPro("?limit=10&page=1&material=EVA")
  }else if(material.value=="Fabric"){
    fetchRenderPro("?limit=10&page=1&material=fabric")
  }
})
// colour filter functionality
colour.addEventListener("change",()=>{
  if(colour.value=="base"){
    fetchRenderPro("?limit=10&page=1")
  }else if(colour.value=="black"){
    fetchRenderPro("?limit=10&page=1&colour=black")
  }else if(colour.value=="white"){
    fetchRenderPro("?limit=10&page=1&colour=white")
  }else if(colour.value=="pink"){
    fetchRenderPro("?limit=10&page=1&colour=pink")
  }else if(colour.value=="blue"){
    fetchRenderPro("?limit=10&page=1&colour=blue")
  }else if(colour.value=="brown"){
    fetchRenderPro("?limit=10&page=1&colour=brown")
  }else if(colour.value=="red"){
    fetchRenderPro("?limit=10&page=1&colour=red")
  }else if(colour.value=="grey"){
    fetchRenderPro("?limit=10&page=1&colour=grey")
  }
})
// Utilites


// Utilites

function fetchRenderPro(query=null){
    fetch(`https://63c7081e4ebaa80285528ba1.mockapi.io/user/product${query ? query : ""}`)
    .then((res)=> {
        let totalCount= 35;
        let totalPage = Math.ceil(totalCount/10);
        renderPage(totalPage)
        return res.json()
    })
    .then((data)=>{
        let proObj=data.map((item)=>({
            imageurl:item.image,
            brand:item.brand,
            price:item.price,
            name:item.name,
            colour:item.colour,
            percent:item.detail
        }))
        product=proObj;
        renderCard(proObj);
    })
}
function renderCard(card){

    let temp=[]
      for(let i=0;i<card.length;i++){
        
        temp.push(getCard(card[i].imageurl,card[i].brand,card[i].name,card[i].price))
      }
    //   console.log(temp)
    mainHtml.innerHTML=temp
    
}
function getCard(url,brand,name,rate){
    let card=`
    <div class="card">
    <div class="img">
                <img src="${url}" alt="">
        </div>
    <div class="brand">
            <h3>${brand}</h3>
        </div>
        <div class="name">
            <h4>${name}</h4>
        </div>
    <div class="price">
            <h4>${"$"+rate}</h4>
        </div>
    </div>`
    return card;
}

window.addEventListener("load",()=>{
    fetchRenderPro("?limit=10&page=1")
})
function renderPage(total){
    function asListOfButtons() {
        let arr = [];
        for (let i = 1; i <=total; i++) {
          arr.push(getAsButton(i));
        }
        
        return arr.join(' ');

        return arr.join('');

      }

      pagination.innerHTML= `
      <div>  
        ${asListOfButtons()}  
      </div>
    `
      let paginationButtons = document.querySelectorAll(".pagination-button");
  for (let btn of paginationButtons) {
    btn.addEventListener('click', (e) => {
      let dataId = e.target.dataset.id;
      fetchRenderPro(`?limit=10&page=${+dataId}`);
    })
  }
}
function getAsButton(pageNumber) {
    return `<button class="pagination-button" data-id=${pageNumber}>${pageNumber}</button>`
  }