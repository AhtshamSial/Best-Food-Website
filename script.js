const navbarCollapse = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".bsb-hero-2");
const btns = document.querySelectorAll('.menu-option .btn');
const cards = document.querySelector('#cards');


navbarCollapse.addEventListener('click' , () => {
    if(window.innerWidth <= 300){
        if(navbar.classList[4] === undefined){
            navbar.classList.add("pb-450");
        } else {
            navbar.classList.remove("pb-450");
            navbar.classList.remove("pb-360");
        }

    }else{
        if(navbar.classList[4] === undefined){
            navbar.classList.add("pb-360");
        } else {
            navbar.classList.remove("pb-360");
            navbar.classList.remove("pb-450");
        }

    }
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');

    // Function to set the active link
    function setActiveLink() {
        // Clear existing active classes
        links.forEach(link => link.classList.remove('active'));

        // Add active class to the matching link
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    }

    setActiveLink();

    links.forEach(link => {
        link.addEventListener('click', function() {
            setActiveLink();
        });
    });
});




window.addEventListener('load', function() {
    console.log("confirm");

    const modal = document.querySelector(".modal-container");
    const loginBtn = document.querySelector(".login");
    const signupBtn = document.querySelector(".signup");

    if (modal && loginBtn && signupBtn) {
        fetch('login-signup.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
               
                modal.innerHTML = html;
                const loginForm = document.getElementById("loginForm");
                const signupForm = document.getElementById("signupForm");
                const showSignupFormLink = document.getElementById("showSignupForm");
                const showLoginFormLink = document.getElementById("showLoginForm");
                const closeBtn = document.querySelectorAll(".close-btn");

                if (loginForm && signupForm && showSignupFormLink && showLoginFormLink && closeBtn.length > 0) {
                    loginBtn.onclick = function() {
                        modal.style.display = "flex";
                        loginForm.classList.remove("d-none");
                        signupForm.classList.add("d-none");
                        setTimeout(() => {
                            modal.classList.add("show");
                        },10);

                    }

                    signupBtn.onclick = function() {
                        modal.style.display = "flex";                      
                        signupForm.classList.remove("d-none");
                        loginForm.classList.add("d-none");
                        setTimeout(() => {
                            modal.classList.add("show");
                        },10);
                    }

                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                            modal.classList.remove("show");
                        }
                    }

                    closeBtn.forEach(button => {
                        button.onclick = () => {
                            modal.style.display = "none";
                            modal.classList.remove("show");
                        };
                    });

                    showSignupFormLink.onclick = function() {
                        signupForm.classList.remove("d-none");
                        loginForm.classList.add("d-none");
                    }

                    showLoginFormLink.onclick = function() {
                        loginForm.classList.remove("d-none");
                        signupForm.classList.add("d-none");
                    }
                } else {
                    console.error('Some elements are missing in the loaded HTML.');
                }
            })
            .catch(error => {
                console.error('Fetch error: ', error);
            });
    } else {
        console.error('Modal or buttons are missing.');
    }
});







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
        <img class="card-img-top object-fit-cover" src="images\\${card.url}" alt="${card.name}">
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
            <img class="card-img-top object-fit-cover" src="images\\${card.url}" alt="${card.name}">
            <div class="card-body">
              <h5 class="card-title ">${card.name}</h5>
              <p class="price position-absolute bottom-0 m-0 start-1 fw-bold fs-6">$${card.price}</p>
              <a href="#" class="btn btn-primary position-absolute bottom-0 end-0 rounded-0 border-0 d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus"></i></a>
            </div>
          </div>
        </div>`

    });
}

(function() {
    const pageName = window.location.pathname.split("/").pop();

    if (pageName === "" || pageName === "index.html" || pageName === "menu.html") {

        if (document.readyState === "complete" || document.readyState === "interactive") {
            getAllFood();
        } else {
            document.addEventListener("DOMContentLoaded", function() {
                getAllFood();
            });
        }
    }
})();


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

