const GM = {
	"401":{
	"url": 'gaming/Lt_G435.html',
	"imgSrc": 'https://ir.ozone.ru/s3/multimedia-9/wc1000/6321102513.jpg',
	"price": 5999,
	"old_price": 7999,
    "name": 'Наушники Игровые Logitech G435 LIGHTSPEED',
	},  
	"402":{
	"url": 'gaming/Razer_Kraken.html',
	"imgSrc": 'https://www.lostelecom.ru/image/cache/catalog/naushniki-igrovye-folder/1/928503909-igrovye-naushniki-razer-kraken-x-lite-rz04-02950100-r381-1000x1000.jpg',
	"price": 2599,
	"old_price": 3199,
    "name": 'Наушники Игровые Razer Kraken X Lite',
	},  
	"403":{
	"url": 'gaming/JBL_Quantum.html',
	"imgSrc": 'https://ir.ozone.ru/s3/multimedia-w/wc1000/6574375604.jpg',
	"price": 2499,
	"old_price": 3099,
    "name": 'Наушники Игровые JBL Quantum 100',
	},  
	"404":{
	"url": 'gaming/HX_Cloud_SC.html',
	"imgSrc": 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/38/54/78/54/55/28/100026631521b0.jpg',
	"price": 1999,
	"old_price": 2599,
    "name": 'Наушники Игровые HyperX Cloud Stinger Core',
	},  
}
let out = '<div class="company">' ;
for (let key in GM) {
	out +=`<div class="product">`;
	out +=`<img onclick="document.location='${GM[key]['url']}'" class="img-headphones" alt="Наушники" src="${GM[key]['imgSrc']}"/>`;
	out +=`<div class="price">`;
	out +=`<span class="product-price__current">${GM[key]['price']}₽</span>`;
	out +=`<span class="product-price__old">${GM[key]['old_price']}₽</span></div>`;
	out +=`<p onclick="document.location='${GM[key]['url']}'" class="product__title">${GM[key]['name']}</p>`;
	out +=`<button class="btn button-corect" data-articul="${key}">В корзину</button>`;
	out +=`</div>`;
}
out += `</div>`;
document.querySelector('.GM').innerHTML = out;

const data ={};

document.querySelector('.GM').addEventListener('click', event => {
	if (event.target.classList.contains('btn')) {
		let articul = event.target.dataset['articul'];
		if (data[articul] !== undefined) {
			data[articul]['count']++;
			let count1 = data[articul]['count']
			let price1 = data[articul]['price']
			let price2 = data[articul]['double_price']
			data[articul]['price'] = price1 + price2
		}
		else {
			data[articul] = GM[articul];
			data[articul]['count'] = 1;
		}
		localStorage.setItem('GM', JSON.stringify(data)) ;
	}
})