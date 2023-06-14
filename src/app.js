// for logo
document.querySelector(".head").addEventListener("click", () => {
  location.reload();
});

// <-----------------------------------------end of logo--------------------------------------------------->

// for carousel
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

let position = 0;
let intervalId;

const updatePosition = () => {
  for (let slide of slides) {
    slide.classList.remove("item-visible");
    slide.classList.add("item-hidden");
  }

  slides[position].classList.add("item-visible");
};

const previousSlide = () => {
  position--;
  if (position < 0) {
    position = totalSlides - 1;
  }
  updatePosition();
};

const nextSlide = () => {
  position++;
  if (position >= totalSlides) {
    position = 0;
  }
  updatePosition();
};

const startSlideShow = () => {
  intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
};

const stopSlideShow = () => {
  clearInterval(intervalId);
};

prevBtn.addEventListener("click", () => {
  previousSlide();
  stopSlideShow(); // Stop slideshow when manually navigating
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopSlideShow(); // Stop slideshow when manually navigating
});

startSlideShow(); // Start the slideshow

// Pause slideshow on hover
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", stopSlideShow);
carousel.addEventListener("mouseleave", startSlideShow);

// <----------------------------------end of carousel------------------------------------------------->

// for pizza-section

function filterPizzas(category) {
  const pizzas = Array.from(document.querySelectorAll(".pizza"));
  pizzas.forEach((pizza) => {
    pizza.style.display = "none";
  });

  const filteredPizzas = pizzas.filter((pizza) =>
    category === "all" ? true : pizza.classList.contains(category)
  );

  filteredPizzas.forEach((pizza) => {
    pizza.style.display = "block";
  });
}

const allBtn = document.getElementById("all");
const vegBtn = document.getElementById("veg");
const nonVegBtn = document.getElementById("non-veg");

allBtn.style.backgroundColor = "#1FB31A";
allBtn.style.color = "#fff";

allBtn.addEventListener("click", () => {
  filterPizzas("all");
  setActiveButton(allBtn);
});

vegBtn.addEventListener("click", () => {
  filterPizzas("veg");
  setActiveButton(vegBtn);
});

nonVegBtn.addEventListener("click", () => {
  filterPizzas("non-veg");
  setActiveButton(nonVegBtn);
});

function setActiveButton(button) {
  allBtn.style.backgroundColor = "";
  allBtn.style.color = "";
  vegBtn.style.backgroundColor = "";
  vegBtn.style.color = "";
  nonVegBtn.style.backgroundColor = "";
  nonVegBtn.style.color = "";

  button.style.backgroundColor = "#1FB31A";
  button.style.color = "#fff";
}

// for increasing pizza count
const increasePizzaCount = document.querySelectorAll(".increase-count");
const decreasePizzaCount = document.querySelectorAll(".decrease-count");

increasePizzaCount.forEach((increase) => {
  increase.addEventListener("click", () => {
    const pizzaCountValue =
      increase.parentElement.querySelector(".count-value");
    let pizzaCount = parseInt(pizzaCountValue.textContent);
    pizzaCount++;
    pizzaCountValue.textContent = pizzaCount;
  });
});

decreasePizzaCount.forEach((decrease) => {
  decrease.addEventListener("click", () => {
    const pizzaCountValue =
      decrease.parentElement.querySelector(".count-value");
    let pizzaCount = parseInt(pizzaCountValue.textContent);
    if (pizzaCount > 1) {
      pizzaCount--;
      pizzaCountValue.textContent = pizzaCount;
    }
  });
});

// for cart-button
const addToCart = document.querySelectorAll(".addToCart");
const pizzaCountValue = document.querySelectorAll(".count-value");
const pizzaTitle = document.querySelectorAll(".pizza-title");
const pizzaPrice = document.querySelectorAll(".pizza-price");
const pizzaImage = document.querySelectorAll(".pizza-image");

addToCart.forEach((add, index) => {
  add.addEventListener("click", () => {
    const countValue = pizzaCountValue[index].textContent;
    const title = pizzaTitle[index].textContent;
    alert(`${countValue} ${title} Added to Carts`);
    addCart(index);
  });
});

// <-----------------------------------end of pizza-section----------------------------------------->

// for cart

const cartEl = document.getElementById("cart");
const containerEl = document.querySelector(".container");
let pizzas = [];
let pizzaList = document.querySelector(".cart-list");
const cartHeading = document.querySelector(".cart-heading");
const cartSection = document.querySelector(".cart-section");
const cartCount = document.querySelector(".cart-count");
const cartContainer = document.querySelector(".cart-container");
const grandTotal = document.querySelector(".grand-total");
const orderBtn = document.querySelector(".order-btn");
const orderSection = document.querySelector(".order-section");
const confSec = document.querySelector(".confirmation-section");
const clearBtn = document.querySelector(".clear-btn");
confSec.style.display = "none";
cartSection.style.display = "none";

// function -> when user will click order button
function orderItems() {
  orderBtn.addEventListener("click", () => {
    cartSection.style.display = "none";
    orderSection.innerHTML = `
    <h2>SHOPPING CART</h2>
      <div class="amount-section">
        <h3>Total Amount:</h3>
        <h3>₹<span>${grandTotal.textContent}</span></h3>
      </div>
      <form action="">
        <input type="text" placeholder="Enter Your Name" / required>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your address"
          required
        ></textarea>
        <input type="number" placeholder="Enter your Postal Code" required/>
        <input type="number" placeholder="Enter your Mobile Number" required/>
        <div class="order-btns">
          <button type="submit" class="submit-btn">Submit</button>
        </div>
      </form>
    `;

    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent form submission

      const inputFields = document.querySelectorAll(
        "input[required], textarea[required]"
      );
      const isAllFieldsFilled = Array.from(inputFields).every(
        (field) => field.value.trim() !== ""
      );

      if (isAllFieldsFilled) {
        orderSection.style.display = "none";
        confSec.style.display = "flex";
      } else {
        // Display an error message or take appropriate action
        alert("Please fill in all the required fields.");
      }
    });
  });
}

// exit btn
document.querySelector(".exit-btn").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

// fucntion to check whether cart is empty or not and then manipulate the details according to that
function checkCart() {
  if (pizzas.length < 1) {
    cartSection.style.minHeight = "80vh";
    cartCount.style.display = "none";
    clearBtn.style.display = "none";
    cartContainer.style.display = "none";
    cartHeading.textContent = "Cart is empty";
  } else {
    cartSection.style.minHeight = "auto";
    cartHeading.textContent = "Your Cart is here!";
    cartCount.style.display = "flex";
    clearBtn.style.display = "flex";
    if (window.innerWidth < 725) {
      cartContainer.style.display = "flex";
    } else {
      cartContainer.style.display = "grid";
    }
    cartCount.textContent = pizzas.length;
    orderItems();
  }
}

window.addEventListener("resize", checkCart);

checkCart();

cartEl.addEventListener("click", () => {
  containerEl.style.display = "none";
  cartSection.style.display = "block";
});

// Save cart data to local storage
function saveCartData() {
  localStorage.setItem("cartData", JSON.stringify(pizzas));
}

// Load cart data from local storage
function loadCartData() {
  const storedCartData = localStorage.getItem("cartData");
  if (storedCartData) {
    pizzas = JSON.parse(storedCartData);
    updateCartList();
  }
}

function addCart(index) {
  const existingPizza = pizzas.find(
    (pizza) => pizza.name === pizzaTitle[index].textContent
  );
  if (existingPizza) {
    existingPizza.count += parseInt(pizzaCountValue[index].textContent);
  } else {
    const pizza = {
      img: pizzaImage[index].getAttribute("src"),
      name: pizzaTitle[index].textContent,
      count: parseInt(pizzaCountValue[index].textContent),
      price: parseInt(pizzaPrice[index].textContent),
    };
    pizzas.push(pizza);
  }

  updateCartList();
  saveCartData();
}

function updateCartList() {
  pizzaList.innerHTML = "";
  let content = "";
  let total = 0;

  pizzas.forEach((pizza) => {
    content += `<div class="pizza">
                  <img src="${pizza.img}" alt="" />
                  <h3>${pizza.name}</h3>
                  <h6>Quantity : ${pizza.count}</h6>
                  <h6>Price : ${pizza.price}</h6>
                  <h6>Total Price : ${pizza.count * pizza.price}</h6>
                  <button class="removeFromCart">REMOVE FROM CART</button>
                </div>`;

    total = pizza.count * pizza.price;
  });

  checkCart();
  pizzaList.innerHTML = content;
  updateGrandTotal();
}

// after clicking clear-all button
document.querySelector(".clear-all").addEventListener("click", () => {
  pizzaList.innerHTML = "";
  grandTotal.textContent = 0;
  pizzas = [];
  saveCartData();
  checkCart();
});

// function for upgrading grand total
function updateGrandTotal() {
  let total = 0;
  pizzas.forEach((pizza) => {
    total += pizza.count * pizza.price;
  });
  grandTotal.textContent = total;
}

// Remove pizza from the cart
function removeFromCart(index) {
  pizzas.splice(index, 1);
  updateCartList();
  updateGrandTotal();
  saveCartData();
}

// Remove individual items from the cart
pizzaList.addEventListener("click", (event) => {
  if (event.target.classList.contains("removeFromCart")) {
    const pizzaIndex = [...event.target.parentNode.parentNode.children].indexOf(
      event.target.parentNode
    );
    removeFromCart(pizzaIndex);
  }
});

// Load cart data when the page loads
loadCartData();
