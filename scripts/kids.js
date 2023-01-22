let data=[
    {name:"Nike",
    img:"https://www.famousfootwear.com/blob/product-images/20000/96/48/5/96485_pair_medium.jpg",
    desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
    price:1200,
    size:3.4,
    color:"White/Pink",
    Rating:4.5,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/32/42/5/32425_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Blue",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/53/69/6/53696_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"White/Black/Tan",
Rating:4.6,
},

{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/38/40/8/38408_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"White/Black/Tan",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/58/89/2/58892_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"White",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/75/75/4/75754_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/38/42/0/38420_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Blue",
Rating:4.6,
},
{name:"Nike",
img:"https://www.famousfootwear.com/blob/product-images/20000/51/34/6/51346_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Pink/White",
Rating:4.6,
},
{name:"HEYDUDE",
img:"https://www.famousfootwear.com/blob/product-images/20000/40/90/8/40908_pair_medium.jpg",
desc:"Kids' Court Borough 2 Low Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Beige/White",
Rating:4.6,
},

{name:"Converse",
img:"https://www.famousfootwear.com/blob/product-images/20000/52/84/0/52840_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Converse",
img:"https://www.famousfootwear.com/blob/product-images/20000/52/68/7/52687_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"White",
Rating:4.6,
},
{name:"Crocs",
img:"https://www.famousfootwear.com/blob/product-images/20000/90/60/9/90609_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
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
price:1500,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Vans",
img:"https://www.famousfootwear.com/blob/product-images/20000/58/62/2/58622_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"White/Red",
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
price:1500,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Crocs",
img:"https://www.famousfootwear.com/blob/product-images/20000/78/19/4/78194_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Black",
Rating:4.6,
},
{name:"Puma",
img:"https://www.famousfootwear.com/blob/product-images/20000/92/88/6/92886_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Black/Blue",
Rating:4.6,
},
{name:"Crocs",
img:"https://www.famousfootwear.com/blob/product-images/20000/38/08/7/38087_pair_medium.jpg",
desc:"Kids' Chuck Taylor All Star Lift High Top Sneaker Big Kid",
price:1500,
size:3.4,
color:"Black/Blue",
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
data.map(function(el,i){
    let div=document.createElement("div");
    let sym=document.createElement("p");
    sym.innerHTML=`<p>&#9825;<p>`
    sym.style.fontSize="30px";
    sym.style.textAlign="end"
    let img=document.createElement("img");
    img.src=el.img
    let h4=document.createElement("h4");
    h4.innerText=el.name
    let p=document.createElement("p");
    p.innerText=el.desc
    let price=document.createElement("p");
    price.innerText="Price:- "+el.price;
    let size=document.createElement("p");
    size.innerText="Size:- "+el.size
    let rating=document.createElement("p");
    rating.innerText="Rating:- " +el.Rating
    div.append(sym,img,h4,p,price,rating)
    show.append(div)
})