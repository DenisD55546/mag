const ICh = {
	"201":{
	"url": 'in-ch_hp/Nothing_Ear_2.html',
	"imgSrc": 'https://img.mvideo.ru/Big/50175513bb.jpg',
	"price": 11999,
	"old_price": 13999,
    "name": 'Наушники True Wireless Nothing Ear (2) White',
	},  
	"202":{
	"url": 'in-ch_hp/jbl_t110.html',
	"imgSrc": 'https://img.mvideo.ru/Pdb/50174813b.jpg',
	"price": 999,
	"old_price": 1599,
    "name": 'Наушники  JBL T110  Black',

	},  
	"203":{
	"url": 'in-ch_hp/Sony_EX15.html',
	"imgSrc": 'https://img.mvideo.ru/Pdb/50173056b.jpg',
	"price": 899,
	"old_price": 1499,
    "name": 'Наушники Sony MDR-EX15AP Black',
	},  
	"204":{
	"url": 'in-ch_hp/Harper_705.html',
	"imgSrc": 'https://img.mvideo.ru/Pdb/50047160b.jpg',
	"price": 499,
	"old_price": 999,
    "name": 'Наушники Harper HV-705 Pink',
	},  
}
let out = '<div class="company">' ;
for (let key in ICh) {
	out +=`<div class="product">`;
	out +=`<img onclick="document.location='${ICh[key]['url']}'" class="img-headphones" alt="Наушники" src="${ICh[key]['imgSrc']}"/>`;
	out +=`<div class="price">`;
	out +=`<span class="product-price__current">${ICh[key]['price']}₽</span>`;
	out +=`<span class="product-price__old">${ICh[key]['old_price']}₽</span></div>`;
	out +=`<p onclick="document.location='${ICh[key]['url']}'" class="product__title">${ICh[key]['name']}</p>`;
	out +=`<button class="btn button-corect" data-articul="${key}">В корзину</button>`;
	out +=`</div>`;
}
out += `</div>`;
document.querySelector('.ICh').innerHTML = out;

const data ={};

document.querySelector('.ICh').addEventListener('click', event => {
	if (event.target.classList.contains('btn')) {
		let articul = event.target.dataset['articul'];
		if (data[articul] !== undefined) {
			data[articul]['count']++;
		}
		else {
			data[articul] = ICh[articul];
			data[articul]['count'] = 1;
		}
		localStorage.setItem('ICh', JSON.stringify(data)) ;
	}
})