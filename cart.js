const productsBtn = document.querySelectorAll('.btn');//product__btn
const cartProductsList = document.querySelector('.cart-content__list');
const cartQuantity = document.querySelector('.cart__num');
const fullPrice = document.querySelector('.fullprice');
let price = 0;

const randomId = () =>{
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1');
};

const  plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const  minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printFullPrice = () => {
	fullPrice.textContent = `${ normalPrice(price)} ₽`;
};

const printQuantity = () => {c
	let length = cartProductsList.querySelector('.cart-content__list').children.length;
	cartQuantity.textContent = lenth;
};

const generateCartProduct = (img, title, price, id) => {
	return `
	<li class="cart-product">
	<div class="korzina-t" data-id={${id}}>
	  <div class="container-korzina">
		<div onclick="document.location='in-ch_hp/Nothing_Ear_2.html'" class="img-korzina-div"><img class="img-korzina" src="${img}"></div>
		<div class="container-opis2">
		  <div class="opis-k"><div onclick="document.location='in-ch_hp/Nothing_Ear_2.html'" class="content-opis-k">${title}</div>
			<button class="base-ui cart-product__delete">
			  <div class="base-ico">
				<div class="svg">
				  <svg width="20px" height="20px" viuwBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.6663 3.125C12.0115 3.125 12.2913 2.84518 12.2913 2.5C12.2913 2.15482 12.0115 1.875 11.6663 1.875H8.33301C7.98783 1.875 7.70801 2.15482 7.70801 2.5C7.70801 2.84518 7.98783 3.125 8.33301 3.125L11.6663 3.125Z" fill="#AFAFAF"></path>
					<path d="M17.2913 5C17.2913 5.34518 17.0115 5.625 16.6663 5.625L3.33301 5.625C2.98783 5.625 2.70801 5.34518 2.70801 5C2.70801 4.65482 2.98783 4.375 3.33301 4.375L16.6663 4.375C17.0115 4.375 17.2913 4.65482 17.2913 5Z" fill="#AFAFAF"></path>
					<path d="M4.99967 7.70833C5.34485 7.70833 5.62467 7.98816 5.62467 8.33333V15.8333C5.62467 16.4086 6.09104 16.875 6.66634 16.875H13.333C13.9083 16.875 14.3747 16.4086 14.3747 15.8333V8.33333C14.3747 7.98816 14.6545 7.70833 14.9997 7.70833C15.3449 7.70833 15.6247 7.98816 15.6247 8.33333V15.8333C15.6247 17.099 14.5987 18.125 13.333 18.125H6.66634C5.40069 18.125 4.37467 17.099 4.37467 15.8333V8.33333C4.37467 7.98816 4.6545 7.70833 4.99967 7.70833Z" fill="#AFAFAF"></path>
					<path d="M8.33301 9.375C8.67819 9.375 8.95801 9.65482 8.95801 10V14.1667C8.95801 14.5118 8.67819 14.7917 8.33301 14.7917C7.98783 14.7917 7.70801 14.5118 7.70801 14.1667V10C7.70801 9.65482 7.98783 9.375 8.33301 9.375Z" fill="#AFAFAF"></path>
					<path d="M12.2913 10C12.2913 9.65482 12.0115 9.375 11.6663 9.375C11.3212 9.375 11.0413 9.65482 11.0413 10V14.1667C11.0413 14.5118 11.3212 14.7917 11.6663 14.7917C12.0115 14.7917 12.2913 14.5118 12.2913 14.1667V10Z" fill="#AFAFAF"></path>
				  </svg>
				</div>
			  </div>
			  <div class="delete">Удалить</div>
			</button>
		  </div>
		  <div class="container-price">
			<div class="dop-price-content"><div class="default">1 шт.</div></div>
			<div class="price-font__k price-k">${normalPrice(price)}₽</div>
		  </div>
		</div>
	  </div>
	</div>
  </li>
	`;
};


productsBtn.forEach(el => {
  el.closest('.product').setAttribute('data-id', randomId());
  el.addEventListener('click', (e) => {
  	let self = e.currentTarget;
	let parent = self.closest('.product');
	let id = parent.dataset.id;
	let img = parent.querySelector('.img-headphones').getAttribute('src');
	let title = parent.querySelector('.product__title').textContent;
	// let priceString = parent.querySelector('.product-price__current').textContent;
	let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product-price__current').textContent));

	plusFullPrice(priceNumber);
	console.log(price);
	printFullPrice();
	cartProductsList.querySelector('.company').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
	printQuantity();
	self.disabled = true;
  });
});




























// function test(t) {
// 	if (t === undefined) {
// 	  return 'Undefined value!';
// 	}
// 	return t;
//   }
  
//   let x;
  
//   console.log(test(x));
