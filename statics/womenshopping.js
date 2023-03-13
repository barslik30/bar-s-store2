let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "shoes",
      price: "30",
      image: "adidaswomen1.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "shoes",
      price: "49",
      image: "adidaswomen2.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "shoes",
      price: "99",
      image: "adidaswomen3.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "shoes",
      price: "29",
      image: "adidaswomen4.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "shoes",
      price: "129",
      image: "adidaswomen5.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "shoes",
      price: "89",
      image: "adidaswomen6.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "shoes",
      price: "189",
      image: "adidaswomen7.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "shoes",
      price: "49",
      image: "adidaswomen8.jpg",
    },
     {
      productName: "Comfy Gray Pants",
      category: "shoes",
      price: "49",
      image: "adidaswomen9.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt1.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt2.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt3.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt4.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt5.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt6.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt7.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt8.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "49",
      image: "adidastshirt11.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants1.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants2.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants3.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants4.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants5.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants6.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants7.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants8.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "adidaspants9.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets1.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets2.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets3.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets4.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets5.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets6.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets7.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets8.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Jackets",
      price: "49",
      image: "adidasjackets9.jpg",
    },



    
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};