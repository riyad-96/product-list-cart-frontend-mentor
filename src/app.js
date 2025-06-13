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
};

const productListContainer = document.getElementById('product-list-container');
const cartInfo = document.getElementById('cart-info');
const productCount = document.getElementById('product-count');

const tailwind = {
  eachMenu: 'eachMenu',
  eachMenuImgContainer: 'aspect-1/1 bg-cover bg-center bg-no-repeat border-blue-700 rounded-lg relative',
  cartBtnContainer: 'cartBtnContainer border border-(--rose-500) hover:border-(--red) absolute top-full left-[50%] translate-[-50%] w-[160px] h-[45px] rounded-full',
  addToCartBtn: 'addToCartBtn group w-full h-full bg-white rounded-full flex items-center justify-center gap-2 cursor-pointer',
};

document.addEventListener('DOMContentLoaded', () => {
  dessertMenu.forEach((menu) => {
    const div = document.createElement('div');
    div.className = tailwind.eachMenu;
    div.innerHTML = `
      <div class="${tailwind.eachMenuImgContainer}" style="background-image: url(${menu.image.desktop});">
        <div class="${tailwind.cartBtnContainer}">
          <button data-menu-id="${menu.id}" class="${tailwind.addToCartBtn}">
            ${svg.cart}
            <span class="font-semibold text-sm text-(--rose-900) group-hover:text-(--red)">Add to Cart</span>
          </button>
        </div>
      </div>
      <div class="mt-8">
        <span class="text-sm text-(--rose-500)">${menu.category}</span>
        <h3 class="font-semibold">${menu.name}</h3>
        <span class="text-lg text-(--red) font-semibold">$${menu.price.toFixed(2)}</span>
      </div>
    `;
    productListContainer.appendChild(div);
  });
});


document.addEventListener('click', (e) => {
  const addToCartBtn = e.target.closest('.addToCartBtn');
  if(addToCartBtn) {
    const eachMenu = addToCartBtn.closest('.eachMenu');
  }
})