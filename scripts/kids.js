let data=[
    {name:"Nike",
    img:"https://www.famousfootwear.com/blob/product-images/20000/96/48/5/96485_pair_medium.jpg",
    desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
    price:89,
    size:3.4,
    color:"White",
    Rating:4.5,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/32/42/5/32425_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:80,
size:3.4,
color:"Blue",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/53/69/6/53696_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:78,
size:3.4,
color:"White",
Rating:4.6,
},

{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/38/40/8/38408_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:75,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/58/89/2/58892_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:40,
size:3.4,
color:"White",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/75/75/4/75754_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:34,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/38/42/0/38420_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:67,
size:3.4,
color:"Blue",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/51/34/6/51346_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:34,
size:3.4,
color:"Pink",
Rating:4.6,
},
{name:"HEYDUDE",
img:"https://www.famousfootwear.com/blob/product-images/20000/40/90/8/40908_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:43,
size:3.4,
color:"Beige",
Rating:4.6,
},

{name:"Converse",
img:"https://www.famousfootwear.com/blob/product-images/20000/52/84/0/52840_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:45,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Converse",
img:"https://www.famousfootwear.com/blob/product-images/20000/52/68/7/52687_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:235,
size:3.4,
color:"White",
Rating:4.6,
},
{name:"Crocs",
img:"https://www.famousfootwear.com/blob/product-images/20000/90/60/9/90609_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:123,
size:3.4,
color:"White",
Rating:4.6,
},
{name:"Bearpaw",
img:"https://www.famousfootwear.com/blob/product-images/20000/96/72/9/96729_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Brown",
Rating:4.6,
},
{name:"Dr. Martens",
img:"https://www.famousfootwear.com/blob/product-images/20000/36/27/0/36270_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:45,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Vans",
img:"https://www.famousfootwear.com/blob/product-images/20000/58/62/2/58622_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:70,
size:3.4,
color:"Red",
Rating:4.6,
},
{name:"Vans",
img:"https://www.famousfootwear.com/blob/product-images/20000/78/76/7/78767_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Blue",
Rating:4.6,
},
{name:"Adidas",
img:"https://www.famousfootwear.com/blob/product-images/20000/75/58/6/75586_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:60,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Crocs",
img:"https://www.famousfootwear.com/blob/product-images/20000/78/19/4/78194_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:130,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Puma",
img:"https://www.famousfootwear.com/blob/product-images/20000/92/88/6/92886_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:100,
size:3.4,
color:"Blue",
Rating:4.6,
},
{name:"Crocs",
img:"https://www.famousfootwear.com/blob/product-images/20000/38/08/7/38087_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:150,
size:3.4,
color:"Pink",
Rating:4.6,
}




];

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}


document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image-1').src = src;
    });
  });
  
  document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
      var src = image_2.getAttribute('src');
      document.querySelector('.big-image-2').src = src;
    });
  });
  
  document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
      var src = image_3.getAttribute('src');
      document.querySelector('.big-image-3').src = src;
    });
  });

let show=document.querySelector(".show")
// console.log(show)

let favourite_data=JSON.parse(localStorage.getItem("favourite_data_list"))||[];

let cart_data=JSON.parse(localStorage.getItem("cart_data_list"))||[];



function showdata(data){


data.map(function(el,i){
    let div=document.createElement("div");
    let sym=document.createElement("p");
    sym.innerHTML=`<p>&#9825;<p>`
    sym.style.fontSize="30px";
    sym.style.textAlign="end"
    sym.id="favourite"
    sym.addEventListener("click",
    function favou(e){
      let favourite_data=JSON.parse(localStorage.getItem("favourite_data_list"))||[];
      e.target.dataset.id
           favourite_data.push(el)
      localStorage.setItem("favourite_data_list", JSON.stringify(favourite_data));
     
   
    })
    let img=document.createElement("img");
    img.src=el.img
    let h2=document.createElement("h2");
    h2.innerText=el.name
    let p=document.createElement("p");
    p.innerText=el.desc
    let price=document.createElement("p");
    price.innerText="Price:- $"+el.price;
    price.id="h1price"
    let size=document.createElement("p");
    size.innerText="Size:- "+el.size
    let rating=document.createElement("p");
    rating.innerText="Rating:- " +el.Rating
    rating.id="rating"
    let btn=document.createElement("button");
    btn.innerText="Add To Cart"
    btn.id="Add_To_Cart_button";
    btn.addEventListener("click",()=>{
      let cart_data=JSON.parse(localStorage.getItem("cart_data_list"))||[];
      cart_data.push(el)
      localStorage.setItem("cart_data_list", JSON.stringify(cart_data));

    })
    div.append(sym,img,h2,p,price,rating,btn)
    show.append(div)
})
}

showdata(data);

let fill= document.querySelector("#fil");
 fill.addEventListener("change",()=>{
    

  if(fill.value=="Featured"){
     showdata(data)
  }else if(fill.value=="High to Low"){
     show.innerHTML=null;
    data.sort((a,b)=>{
       
      return b.price-a.price
    })
    showdata(data)
    // console.log(data)
  }
  else if(fill.value=="Low to High"){
    show.innerHTML=null;
    data.sort((a,b)=>{
       
      return a.price-b.price
    })
   showdata(data)
   // console.log(data)
 }
  
  

 })


 let brand=document.querySelector("#brand");

 brand.addEventListener("change",()=>{
  
     

  if(brand.value=="base"){
    show.innerHTML=null;
    showdata(data)
    // console.log(1)

  }else if(brand.value=="HEYDUDE"){
    show.innerHTML=null;
    let c=data.filter((el)=>{

      if(el.name=="HEYDUDE"){
        return el
      }
    })
   
    // console.log(13)
    // console.log(c)
 showdata(c)
  
 }
 else if(brand.value=="nike"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Nike"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(brand.value=="Crocs"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Crocs"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(brand.value=="Bearpaw"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Bearpaw"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(brand.value=="Dr. Martens"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Dr. Martens"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(brand.value=="Vans"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Vans"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(brand.value=="Adidas"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Adidas"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(brand.value=="Puma"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Puma"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(brand.value=="Converse"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.name=="Converse"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
 })
 
 let color=document.querySelector("#colour");



color.addEventListener("change",()=>{
     

  if(color.value=="base"){
    show.innerHTML=null;
    showdata(data)
  }else if(color.value=="Black"){
    show.innerHTML=null;
    let c=data.filter((el)=>{

      if(el.color=="Black"){
        return el
      }
    })
   
    // console.log(13)
    // console.log(c)
 showdata(c)
  
 }
 else if(color.value=="White"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.color=="White"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(color.value=="Pink"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.color=="Pink"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(color.value=="Blue"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.color=="Blue"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(color.value=="Red"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.color=="Red"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(color.value=="Brown"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.color=="Brown"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}
else if(color.value=="Beige"){
  show.innerHTML=null;
  let c=data.filter((el)=>{

    if(el.color=="Beige"){
      return el
    }
  })
 
  // console.log(13)
  // console.log(c)
showdata(c)

}

  
})












 let favourite=document.querySelector("#favourite");
 let add_to_cart=document.querySelector("#Add_To_Cart_button");



 favourite.addEventListener("click",()=>{


 })