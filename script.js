const navbarCollapse = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".bsb-hero-2");
const btns = document.querySelectorAll('.menu-option .btn');
const cards = document.querySelector('#cards');

console.log(navbar.classList[4]);

navbarCollapse.addEventListener('click' , () => {
    if(navbar.classList[4] === undefined){
        navbar.classList.add("pb-360");
    } else {
        navbar.classList.remove("pb-360");
    }


});

window.onload = function() {
    window.document.querySelector('.allfood').click();

}

const cardsdData = [
    {
        name : "Delicious Pizza",
        url : "pizza.jpg",
        price : 20,
        type : "lunch",
    },
    {
        name : "Salad",
        url : "salad.jpg",
        price : 10,
        type : "breakfast",
    },
    {
        name : "Chicken broast",
        url : "img4.jpg",
        price : 15,
        type : "dinner",
    },
    {
        name : "Red Berry Smoothie",
        url : "img3.jpg",
        price : 10,
        type : "drinks",
    },
    {
        name : "Chocolate Cake",
        url : "img8.jpg",
        price : 15,
        type : "breakfast"
    },
    {
        name : "Fried Rice With Poached Egg",
        url : "img7.jpg",
        price : 20,
        type : "lunch",
    },
    {
        name : "Pancake With Sliced Strawberry",
        url : "img5.jpg",
        price : 25,
        type : "breakfast"
    },
    {
        name : "Meat With Salad",
        url : "img6.jpg",
        price : 30,
        type : "lunch",
    },
    // {
    //     name : "Rind Snacks",
    //     url : "img9.jpg",
    //     price : 10,
    //     type : "snacks",
    // },

];

function getDishes(type) {
    cardsdData.map( (card) => {
        if(type === card.type) {
            cards.innerHTML +=`
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 p-0">
      <div class="card">
        <img class="card-img-top object-fit-cover" src="${card.url}" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title ">${card.name}</h5>
          <p class="price position-absolute bottom-0 m-0 start-1 fw-bold fs-6">$${card.price}</p>
          <a href="#" class="btn btn-primary position-absolute bottom-0 end-0 rounded-0 border-0 d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus"></i></a>
        </div>
      </div>
    </div>`

        }
    })
}
function getAllFood() {
    cardsdData.map( (card) => {
        cards.innerHTML +=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 p-0">
          <div class="card">
            <img class="card-img-top object-fit-cover" src="${card.url}" alt="${card.name}">
            <div class="card-body">
              <h5 class="card-title ">${card.name}</h5>
              <p class="price position-absolute bottom-0 m-0 start-1 fw-bold fs-6">$${card.price}</p>
              <a href="#" class="btn btn-primary position-absolute bottom-0 end-0 rounded-0 border-0 d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus"></i></a>
            </div>
          </div>
        </div>`

    });
}

getAllFood();

btns.forEach((btn) => {    
    btn.addEventListener('click', () => {
        removeActiveClasses()
        btn.classList.add('active-btn')
        console.log(btn.classList[2])
        cards.innerHTML = "";
        if(btn.classList[2] === "allfood"){
            getAllFood();
        }
        else{
            getDishes(btn.classList[2]);
        }
    })
})

function removeActiveClasses() {
    btns.forEach((btn) => {
        btn.classList.remove('active-btn')
    })
}
