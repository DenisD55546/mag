const TW = {
	"101":{
	"url": 'true_wireless/AirPods_pro2.html',
	"imgSrc": 'https://img.mvideo.ru/Big/50173295bb.jpg',
	"price": 19999,
	"double_price": 19999,
	"old_price": 21999,
    "name": 'Наушники Apple AirPods Pro 2 generation',
	},  
	"102":{
	"url": 'true_wireless/Sm_Buds_2_Pro.html',
	"imgSrc": 'https://img.mvideo.ru/Big/50173587bb.jpg',
	"price": 10999,
	"double_price": 10999,
	"old_price": 11999,
    "name": 'Наушники Samsung Galaxy Buds 2 Pro Graphite',
	},  
	"103":{
	"url": 'true_wireless/Sm_Buds_Pro.html',
	"imgSrc": 'https://img.mvideo.ru/Big/50148100bb.jpg',
	"price": 5999,
	"double_price": 5999,
	"old_price": 6999,
    "name": 'Наушники Samsung Galaxy Buds Pro Black',
	},  
	"104":{
	"url": 'true_wireless/JBL_230NC.html',
	"imgSrc": 'https://img.mvideo.ru/Pdb/50175300b.jpg',
	"price": 4999,
	"double_price": 4999,
	"old_price": 5999,
    "name": 'Наушники JBL Tune 230NC TWS White',
	},  
}
let out = '<div class="company">' ;
for (let key in TW) {
	out +=`<div class="product">`;
	out +=`<img onclick="document.location='${TW[key]['url']}'" class="img-headphones" alt="Наушники" src="${TW[key]['imgSrc']}"/>`;
	out +=`<div class="price">`;
	out +=`<span class="product-price__current">${TW[key]['price']}₽</span>`;
	out +=`<span class="product-price__old">${TW[key]['old_price']}₽</span></div>`;
	out +=`<p onclick="document.location='${TW[key]['url']}'" class="product__title">${TW[key]['name']}</p>`;
	out +=`<button class="btn button-corect" data-articul="${key}">В корзину</button>`;
	out +=`</div>`;
}
out += `</div>`;
document.querySelector('.TW').innerHTML = out;

const data ={};

document.querySelector('.TW').addEventListener('click', event => {
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
			data[articul] = TW[articul];
			data[articul]['count'] = 1;	
		}
		localStorage.setItem('TW', JSON.stringify(data)) ;

	}
})