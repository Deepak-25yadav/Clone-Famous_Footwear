let product=[];
let mainHtml=document.getElementById("product");
let pagination=document.getElementById("pagination_wrapper");
let sorting=document.getElementById("price");
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