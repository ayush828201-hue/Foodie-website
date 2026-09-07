
const swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 600,

  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
})

const cartIcon = document.querySelector('.cart-icon')
const cartTab = document.querySelector('.cart-tab')
const closeBtn = document.querySelector('.close-btn')
const cardList = document.querySelector('.card-list')
const cartList = document.querySelector('.cart-list')
const cartTotal = document.querySelector('.cart-total')
const cartValue = document.querySelector('.cart-value')

cartIcon.addEventListener('click', () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click', () => cartTab.classList.remove('cart-tab-active'));

let productList = [];
let cartProduct = [];

const updateTotals = () => {

  let totalPrice = 0;
  let totalQuantity=0;

  document.querySelectorAll('.item').forEach(i => {
    const price = parseFloat(i.querySelector('.item-total').textContent.replace('₹', ''));
    const quantity=parseInt(i.querySelector('.quantity-value').textContent)

    totalPrice += price;
    totalQuantity += quantity;
  });
  cartTotal.textContent = `₹${totalPrice.toFixed(2)}`;
  cartValue.textContent = totalQuantity;
}

const showCards = () => {
  productList.forEach((product) => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
    orderCard.innerHTML =

      ` <div
    class="order-card  rounded-2xl flex flex-col bg-amber-100 items-center text-center hover:border-gold-finger hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out ">
    <div class="card-image flex justify-center items-center ">
    <img class="size-40 aspect-square " src="${product.image}" alt="">
    </div>
    <h4 class="price text-2xl">${product.name}</h4>
    <h4 class="text-gold-finger">${product.price}</h4>
    <button class="card-btn bg-amber-400 hover:bg-amber-800 hover:scale-105 text-white font-extrabold text-[1.1rem] rounded-2xl h-12 w-30 mt-4">Add to Cart</button>
    </div> `

    cardList.appendChild(orderCard);

    const cardBtn = orderCard.querySelector('.card-btn');
    cardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);
    })
  })
}

const addToCart = (product) => {

  const extproduct = cartProduct.find(item => item.id === product.id);
  if (extproduct) {
    alert('Item already in your cart!');
    return;
  }
  cartProduct.push(product);
  let quantity = 1;
  let price = parseFloat(product.price.replace('₹', ''))

  const cartItem = document.createElement('div');
  cartItem.classList.add('item');

  cartItem.innerHTML =
    `<div class="flex items-center justify-between gap-5 mx-6 transition-all duration-500 ease-in-out ">
      <div class="item-image">
      <img class="aspect-square size-18" src="${product.image}" alt="">
      </div>
      <div class=" flex flex-col text-left w-48" >
        <h4 class="text-[1.2rem] font-medium text-left">${product.name}</h4>
        <h4 class=" text-[1.2rem]  item-total text-left">${product.price}</h4>
      </div>
      <div class="flex justify-end">
      <a href="#"
        class="quantity-btn bg-lead text-pure-white w-[1.7rem] aspect-square rounded-full text-center leading-[1.7rem] minus "><i
        class="fa-solid fa-minus"></i></a>

        <h4 class="quantity-value text-[1.2rem] font-normal mx-[0.6rem]">${quantity}</h4>

        <a href="#"
        class="quantity-btn bg-lead text-pure-white w-[1.7rem] aspect-square flex items-center justify-center rounded-full text-center leading-[1.7rem] plus"><i
        class="fa-solid fa-plus"></i></a>
     </div>
     </div>
  `
  cartList.appendChild(cartItem);
  updateTotals();

  const plusBtn = cartItem.querySelector('.plus')
  const quantityValue = cartItem.querySelector('.quantity-value')
  const itemTotal = cartItem.querySelector('.item-total');
  const minusBtn = cartItem.querySelector('.minus')

  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `₹${(price * quantity).toFixed(2)}`;
    updateTotals();
  });

  minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `₹${(price * quantity).toFixed(2)}`;
      updateTotals();
    }
    else {
      cartItem.classList.add('slide-out')
      setTimeout((params) => {
        cartItem.remove();
        cartProduct = cartProduct.filter(item => item.id !== product.id);
        updateTotals();
      }, 300)
    }
  });

}

const initApp = () => {
  fetch('products.json').then
    (response => response.json()).then
    (data => {
      productList = data;
      showCards();
    })
}

initApp();

cartIcon.addEventListener('click', (e) => {
  e.preventDefault(); // stops the "#" jump-to-top behavior
  cartTab.classList.add('cart-tab-active');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartTab.classList.remove('cart-tab-active');
});




const cardLIst = document.querySelector('.card-list')



cartIcon.addEventListener('click', (e) => {
  e.preventDefault();
  cartTab.classList.add('cart-tab-active');
  cardLIst.classList.add('shift-left');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartTab.classList.remove('cart-tab-active');
  cardLIst.classList.remove('shift-left');
});