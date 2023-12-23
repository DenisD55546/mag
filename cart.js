// const randomId = () =>{
// 	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// };

const cart1 = localStorage.getItem('TW')
const elementCart1 = JSON.parse(cart1)

const cart2 = localStorage.getItem('ICh')
const elementCart2 = JSON.parse(cart2)

const cart3 = localStorage.getItem('PZ')
const elementCart3 = JSON.parse(cart3)

const cart4 = localStorage.getItem('GM')
const elementCart4 = JSON.parse(cart4)

const cart = {...elementCart1, ...elementCart2, ...elementCart3, ...elementCart4}
console.log(cart)

let out = '<ul class="cart-content__list">' ;
for (let key in cart) {
	out += `<li class="cart-product">`;
    out += `<div class="korzina-t">`;
    out += `<div class="container-korzina">`;
    out += `<div onclick="document.location='${cart[key]['url']}'" class="img-korzina-div"><img class="img-korzina" src="${cart[key]['imgSrc']}"></div>`;
    out += `<div class="container-opis2">`;
    out += `<div class="opis-k"><div onclick="document.location='${cart[key]['url']}'" class="content-opis-k">Наушники True Wireless Nothing Ear (2) White</div>`;
    out += `<button class="base-ui cart-product__delete">`;
    out += `<div class="base-ico">`;
    out += `<div class="svg">`;
    out += `<svg width="20px" height="20px" viuwBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">`;
    out += `<path d="M11.6663 3.125C12.0115 3.125 12.2913 2.84518 12.2913 2.5C12.2913 2.15482 12.0115 1.875 11.6663 1.875H8.33301C7.98783 1.875 7.70801 2.15482 7.70801 2.5C7.70801 2.84518 7.98783 3.125 8.33301 3.125L11.6663 3.125Z" fill="#AFAFAF"></path>`;
    out += `<path d="M17.2913 5C17.2913 5.34518 17.0115 5.625 16.6663 5.625L3.33301 5.625C2.98783 5.625 2.70801 5.34518 2.70801 5C2.70801 4.65482 2.98783 4.375 3.33301 4.375L16.6663 4.375C17.0115 4.375 17.2913 4.65482 17.2913 5Z" fill="#AFAFAF"></path>`;
    out += `<path d="M4.99967 7.70833C5.34485 7.70833 5.62467 7.98816 5.62467 8.33333V15.8333C5.62467 16.4086 6.09104 16.875 6.66634 16.875H13.333C13.9083 16.875 14.3747 16.4086 14.3747 15.8333V8.33333C14.3747 7.98816 14.6545 7.70833 14.9997 7.70833C15.3449 7.70833 15.6247 7.98816 15.6247 8.33333V15.8333C15.6247 17.099 14.5987 18.125 13.333 18.125H6.66634C5.40069 18.125 4.37467 17.099 4.37467 15.8333V8.33333C4.37467 7.98816 4.6545 7.70833 4.99967 7.70833Z" fill="#AFAFAF"></path>`;
    out += `<path d="M8.33301 9.375C8.67819 9.375 8.95801 9.65482 8.95801 10V14.1667C8.95801 14.5118 8.67819 14.7917 8.33301 14.7917C7.98783 14.7917 7.70801 14.5118 7.70801 14.1667V10C7.70801 9.65482 7.98783 9.375 8.33301 9.375Z" fill="#AFAFAF"></path>`;
    out += `<path d="M12.2913 10C12.2913 9.65482 12.0115 9.375 11.6663 9.375C11.3212 9.375 11.0413 9.65482 11.0413 10V14.1667C11.0413 14.5118 11.3212 14.7917 11.6663 14.7917C12.0115 14.7917 12.2913 14.5118 12.2913 14.1667V10Z" fill="#AFAFAF"></path>`;
    out += `</svg>`;
    out += `</div>`;
    out += `</div>`;
    out += `<div class="delete">Удалить</div>`;
    out += `</button>`;
    out += `</div>`;
    out += `<div class="container-price">`;
    out += `<div class="dop-price-content"><!--<button class="button__cart">-</button>--><div class="default">${cart[key]['count']} шт.</div><!--<button class="button__cart">+</button>--></div>`;
    out += `<div class="price-font__k price-k">${cart[key]['price']}₽</div>`;
    out += `</div>`;
	out += `</div>`;
    out += `</div>`;
    out += `</div>`;
	out += `</li>`;
}
out += `</ul>`;
document.querySelector('.cart').innerHTML = out;


