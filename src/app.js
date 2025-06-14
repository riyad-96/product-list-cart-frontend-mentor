const dessertMenu = [
  {
    id: 1,
    image: {
      thumbnail: './src/images/image-waffle-thumbnail.jpg',
      mobile: './src/images/image-waffle-mobile.jpg',
      tablet: './src/images/image-waffle-tablet.jpg',
      desktop: './src/images/image-waffle-desktop.jpg',
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
  },
  {
    id: 2,
    image: {
      thumbnail: './src/images/image-creme-brulee-thumbnail.jpg',
      mobile: './src/images/image-creme-brulee-mobile.jpg',
      tablet: './src/images/image-creme-brulee-tablet.jpg',
      desktop: './src/images/image-creme-brulee-desktop.jpg',
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
  },
  {
    id: 3,
    image: {
      thumbnail: './src/images/image-macaron-thumbnail.jpg',
      mobile: './src/images/image-macaron-mobile.jpg',
      tablet: './src/images/image-macaron-tablet.jpg',
      desktop: './src/images/image-macaron-desktop.jpg',
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
  },
  {
    id: 4,
    image: {
      thumbnail: './src/images/image-tiramisu-thumbnail.jpg',
      mobile: './src/images/image-tiramisu-mobile.jpg',
      tablet: './src/images/image-tiramisu-tablet.jpg',
      desktop: './src/images/image-tiramisu-desktop.jpg',
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
  },
  {
    id: 5,
    image: {
      thumbnail: './src/images/image-baklava-thumbnail.jpg',
      mobile: './src/images/image-baklava-mobile.jpg',
      tablet: './src/images/image-baklava-tablet.jpg',
      desktop: './src/images/image-baklava-desktop.jpg',
    },
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
  },
  {
    id: 6,
    image: {
      thumbnail: './src/images/image-meringue-thumbnail.jpg',
      mobile: './src/images/image-meringue-mobile.jpg',
      tablet: './src/images/image-meringue-tablet.jpg',
      desktop: './src/images/image-meringue-desktop.jpg',
    },
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
  },
  {
    id: 7,
    image: {
      thumbnail: './src/images/image-cake-thumbnail.jpg',
      mobile: './src/images/image-cake-mobile.jpg',
      tablet: './src/images/image-cake-tablet.jpg',
      desktop: './src/images/image-cake-desktop.jpg',
    },
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
  },
  {
    id: 8,
    image: {
      thumbnail: './src/images/image-brownie-thumbnail.jpg',
      mobile: './src/images/image-brownie-mobile.jpg',
      tablet: './src/images/image-brownie-tablet.jpg',
      desktop: './src/images/image-brownie-desktop.jpg',
    },
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 5.5,
  },
  {
    id: 9,
    image: {
      thumbnail: './src/images/image-panna-cotta-thumbnail.jpg',
      mobile: './src/images/image-panna-cotta-mobile.jpg',
      tablet: './src/images/image-panna-cotta-tablet.jpg',
      desktop: './src/images/image-panna-cotta-desktop.jpg',
    },
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
  },
];

const svg = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>`,
  carbonNeutral: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>`,
  decrement: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/></svg>`,
  increment: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="CurrentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`,
  removeItem: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`,
};

function emptyMenuListPlaceholder() {
  return `<img class="mx-auto mt-8" src="./src/images/illustration-empty-cart.svg" alt="Image of a cake" />
          <span class="block pt-4 pb-6 text-center text-sm font-semibold text-(--rose-500)">Your added items will appear here</span>`;
}

const productListContainer = document.getElementById('product-list-container');
const productCountContainer = document.getElementById('product-count-container');
const cartInfo = document.getElementById('cart-info');

//! Load all dessert menu
function loadAllMenu() {
  productListContainer.innerHTML = '';
  dessertMenu.forEach((menu) => {
    const div = document.createElement('div');
    div.className = 'eachMenu pb-2';
    div.innerHTML = `
      <div data-selected-item-photo="${menu.id}" class="aspect-1/1 bg-cover bg-center bg-no-repeat border-2 border-transparent rounded-lg relative" style="background-image: url(${menu.image.desktop});">
        <div class="cartBtnContainer border border-(--rose-500) hover:border-(--red) absolute top-full left-[50%] translate-[-50%] w-[160px] h-[45px] rounded-full overflow-hidden">
          <button aria-label="Add ${menu.name} to cart" title="Add ${menu.name} to cart" data-menu-id="${menu.id}" class="addToCartBtn group w-full h-full bg-white flex items-center justify-center gap-2 sm:cursor-pointer">
            ${svg.cart}
            <span class="font-semibold text-sm text-(--rose-900) group-hover:text-(--red)">Add to Cart</span>
          </button>
          <div class="countBtnContainer bg-(--red) h-full flex items-center justify-between px-1">
            <button aria-label="Decrease the amount of ${menu.name}" title="Decrease" data-menu-id="${menu.id}" class="decrementBtn grid place-items-center group p-2 rounded-full sm:cursor-pointer">
              <span class="box-content p-0.2 border border-white rounded-full size-4 grid place-items-center text-white group-hover:text-(--red) group-hover:bg-white">${svg.decrement}</span>
            </button>
            <span data-reset-count-id="${menu.id}" class="productCount text-white select-none">1</span>
            <button aria-label="Increase the amount of ${menu.name}" title="Increase" data-menu-id="${menu.id}" class="incrementBtn grid place-items-center group p-2 rounded-full sm:cursor-pointer">
              <span class="box-content p-0.2 border border-white rounded-full size-4 grid place-items-center text-white group-hover:text-(--red) group-hover:bg-white">${svg.increment}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <span class="text-sm text-(--rose-500)">${menu.category}</span>
        <h3 class="menuName font-semibold">${menu.name}</h3>
        <span class="menuPrice text-lg text-(--red) font-semibold">$${menu.price.toFixed(2)}</span>
      </div>
    `;
    productListContainer.appendChild(div);
  });
}
loadAllMenu();

//! Update cart items
const cartList = [];

function updateCartList() {
  if (cartList.length < 1) {
    cartInfo.innerHTML = '';
    cartInfo.innerHTML = emptyMenuListPlaceholder();
    productCountContainer.textContent = 0;
    return;
  }

  cartInfo.innerHTML = '';
  const listsContainer = document.createElement('div');
  const confirmContainer = document.createElement('div');

  cartList.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'eachCartList py-4 border-b border-(--rose-100)';
    div.innerHTML = `
      <div class="flex items-center justify-between text-sm">
        <div>
          <span class="text-sm font-semibold block mb-2">${item.name}</span>
          <div class="flex gap-2.5 items-center">
            <span class="text-(--red) font-semibold">${item.productCount}x</span>
            <span class="ml-2 text-(--rose-500)"><span class="mr-0.5">@</span>$${item.price.toFixed(2)}</span>
            <span class="text-(--rose-500) font-semibold">$${(item.productCount * item.price).toFixed(2)}</span>
          </div>
        </div>
        <button aria-label="Remove ${item.name} from cart" title="Remove ${item.name} from cart" data-menu-id="${item.id}" class="itemRemoveBtn group grid place-items-center p-1 rounded-full sm:cursor-pointer">
          <span class="border text-(--rose-400) group-hover:text-(--rose-900) rounded-full p-1">
            ${svg.removeItem}
          </span>
        </button>
      </div>
    `;
    listsContainer.appendChild(div);
  });

  const totalPrice = cartList.reduce((accumulator, item) => accumulator + item.productCount * item.price, 0);
  confirmContainer.className = 'mt-6';
  confirmContainer.innerHTML = `
    <div class="flex justify-between mb-6">
      <span class="">Order Total</span>
      <span class="text-2xl font-bold">$${totalPrice.toFixed(2)}</span>
    </div>
    <div class="flex justify-center items-center gap-2 bg-(--rose-50) rounded-md py-4">
      ${svg.carbonNeutral}
      <span class="text-sm">This is a <span class="font-semibold">carbo-neutral</span> delivery</span>
    </div>
    <button class="confirmBtn mt-6 block h-[55px] w-full rounded-full bg-(--red) font-semibold text-white select-none hover:bg-[hsl(14,85%,35%)] sm:cursor-pointer">Confirm Order</button>
  `;
  cartInfo.appendChild(listsContainer);
  cartInfo.appendChild(confirmContainer);

  const totalProducts = cartList.reduce((acc, item) => acc + item.productCount, 0);
  productCountContainer.textContent = totalProducts;
}

function addToCart(btn) {
  const price = Number(btn.closest('.eachMenu').querySelector('.menuPrice').textContent.replace('$', ''));
  const name = btn.closest('.eachMenu').querySelector('.menuName').textContent;
  const menuInfo = {
    id: Number(btn.dataset.menuId),
    name,
    price: price,
    productCount: 1,
  };
  cartList.push(menuInfo);
  btn.closest('.cartBtnContainer').classList.add('switch');
  updateCartList();
  document.querySelector(`[data-selected-item-photo="${btn.dataset.menuId}"]`).classList.add('selected-border');
}

//! Remove item from cart
function removeItemFromCart(btn) {
  const index = cartList.findIndex((item) => item.id === Number(btn.dataset.menuId));
  if (index !== -1) {
    cartList.splice(index, 1);
    const domItemContainer = document.querySelector(`.cartBtnContainer:has([data-menu-id="${btn.dataset.menuId}"])`);
    domItemContainer.classList.remove('switch');
  }
  updateCartList();
  document.querySelector(`[data-reset-count-id="${btn.dataset.menuId}"]`).textContent = 1;
  document.querySelector(`[data-selected-item-photo="${btn.dataset.menuId}"]`).classList.remove('selected-border');
}

//! increment or decrement program
function incrementOrDecrement(btn, value) {
  const index = cartList.findIndex((item) => item.id === Number(btn.dataset.menuId));
  if (index !== -1) {
    if (cartList[index].productCount === 1 && value === -1) return;

    cartList[index].productCount += value;
    updateCartList();
    btn.closest('.countBtnContainer').querySelector('.productCount').textContent = cartList[index].productCount;
  }
}

//! Confirm product program
const confirmedList = document.querySelector('.confirmed-item-list-container');
const confirmedPrice = document.querySelector('.total-confirmed-amount');

function confirmProduct() {
  confirmedList.innerHTML = '';
  let totalConfirmedPrice = 0;

  cartList.forEach((item) => {
    const menuItem = dessertMenu.find((obj) => obj.id === item.id);
    const confirmedItem = cartList.find((obj) => obj.id === menuItem.id);

    const name = confirmedItem.name;
    const count = confirmedItem.productCount;
    const price = confirmedItem.price;
    const totalPrice = count * price;

    totalConfirmedPrice += totalPrice;

    const div = document.createElement('div');
    div.className = 'flex items-center gap-4 py-4 first:pt-0 border-b-1 border-(--rose-100)';
    div.innerHTML = `
      <div class="aspect-1/1 size-[50px]">
        <img class="rounded-md" src="${menuItem.image.thumbnail}" />
      </div>
      <div class="flex-1 grid gap-1 text-sm">
        <span class="font-semibold">${name}</span>
        <div class="flex items-center gap-4">
          <span class="text-(--red) font-semibold">${count}x</span>
          <span class="text-(--rose-500) flex gap-1">
            <span>@</span>
            <span class="">$${price.toFixed(2)}</span>
          </span>
        </div>
      </div>
      <span class="text-lg font-semibold">$${totalPrice.toFixed(2)}</span>`;
    confirmedList.appendChild(div);
  });

  confirmedPrice.textContent = '$' + totalConfirmedPrice.toFixed(2);
  confirmedList.closest('.confirm-modal').classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

//! Refresh page program
function refreshPage() {
  loadAllMenu();
  document.querySelector('.confirm-modal').classList.add('hide');
  cartInfo.innerHTML = emptyMenuListPlaceholder();
  document.body.style.overflow = '';
  cartList.length = 0;
}

//! Event listener
document.addEventListener('click', (e) => {
  const addToCartBtn = e.target.closest('.addToCartBtn');
  if (addToCartBtn) {
    addToCart(addToCartBtn);
    return;
  }
  const itemRemoveBtn = e.target.closest('.itemRemoveBtn');
  if (itemRemoveBtn) {
    removeItemFromCart(itemRemoveBtn);
    return;
  }
  const incrementBtn = e.target.closest('.incrementBtn');
  const decrementBtn = e.target.closest('.decrementBtn');
  if (incrementBtn) {
    incrementOrDecrement(incrementBtn, 1);
    return;
  }
  if (decrementBtn) {
    incrementOrDecrement(decrementBtn, -1);
    return;
  }
  const confirmBtn = e.target.closest('.confirmBtn');
  if (confirmBtn) {
    confirmProduct();
    return;
  }
  if (e.target.closest('.startNewOrderBtn')) {
    refreshPage();
  }
  if (e.target.closest('.devNoteBtn')) {
    document.querySelector('.devNote-modal').classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }
  if (e.target.closest('.openMyEditorPageBtn')) {
    window.open('https://zero-ide.vercel.app', '_blank');
    document.querySelector('.devNote-modal').classList.add('hide');
    document.body.style.overflow = '';
  }
  if (e.target.closest('.devNote-modal-content')) {
    return;
  }
  if (e.target.closest('.devNote-modal')) {
    document.querySelector('.devNote-modal').classList.add('hide');
    document.body.style.overflow = '';
  }
});
