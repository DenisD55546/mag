const PZ = {
	"301":{
	"url": 'polnraz/AirPods_max.html',
	"imgSrc": 'https://img.mvideo.ru/Big/50171823bb.jpg',
	"price": 49999,
	"old_price": 57999,
    "name": 'Наушники Apple AirPods Max Silver',
	},  
	"302":{
	"url": 'polnraz/Sony_WH1000XM5.html',
	"imgSrc": 'https://img.mvideo.ru/Big/50173303bb.jpg',
	"price": 19999,
	"old_price": 25999,
    "name": 'Наушники Sony WH-1000XM5 Black',
	},  
	"303":{
	"url": 'polnraz/JBL_T760.html',
	"imgSrc": 'https://img.mvideo.ru/Pdb/50174817b.jpg',
	"price": 5999,
	"old_price": 6999,
    "name": ' Наушники JBL T 760 NC Black',
	},  
	"304":{
	"url": 'polnraz/Philips.html',
	"imgSrc": 'https://img.mvideo.ru/Big/50150882bb.jpg',
	"price": 999,
	"old_price": 1599,
    "name": 'Наушники Philips TAH2005BK/00',
	},  
}
let out = '<div class="company">' ;
for (let key in PZ) {
	out +=`<div class="product">`;
	out +=`<img onclick="document.location='${PZ[key]['url']}'" class="img-headphones" alt="Наушники" src="${PZ[key]['imgSrc']}"/>`;
	out +=`<div class="price">`;
	out +=`<span class="product-price__current">${PZ[key]['price']}₽</span>`;
	out +=`<span class="product-price__old">${PZ[key]['old_price']}₽</span></div>`;
	out +=`<p onclick="document.location='${PZ[key]['url']}'" class="product__title">${PZ[key]['name']}</p>`;
	out +=`<button class="btn button-corect" data-articul="${key}">В корзину</button>`;
	out +=`</div>`;
}
out += `</div>`;
document.querySelector('.PZ').innerHTML = out;

const data ={};

document.querySelector('.PZ').addEventListener('click', event => {
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
			data[articul] = PZ[articul];
			data[articul]['count'] = 1;
		}
		localStorage.setItem('PZ', JSON.stringify(data)) ;
	}
})