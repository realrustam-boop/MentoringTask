const products = [
  {
    id: 1,
    title: 'Laptop',
    category: 'electronics',
    price: 1200,
    discount: 10,
    inStock: true,
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Mouse',
    category: 'electronics',
    price: 25,
    discount: 0,
    inStock: true,
    rating: 4.3,
  },
  {
    id: 3,
    title: 'Keyboard',
    category: 'electronics',
    price: 75,
    discount: 15,
    inStock: false,
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Desk',
    category: 'furniture',
    price: 300,
    discount: 20,
    inStock: true,
    rating: 4.1,
  },
  {
    id: 5,
    title: 'Chair',
    category: 'furniture',
    price: 150,
    discount: 5,
    inStock: false,
    rating: 3.9,
  },
  {
    id: 6,
    title: 'Notebook',
    category: 'stationery',
    price: 5,
    discount: 0,
    inStock: true,
    rating: 4.0,
  },
  {
    id: 7,
    title: 'Pen',
    category: 'stationery',
    price: 2,
    discount: 0,
    inStock: true,
    rating: 4.2,
  },
  {
    id: 8,
    title: 'Monitor',
    category: 'electronics',
    price: 450,
    discount: 25,
    inStock: true,
    rating: 4.8,
  },
  {
    id: 9,
    title: 'Headphones',
    category: 'electronics',
    price: 180,
    discount: 10,
    inStock: true,
    rating: 4.6,
  },
  {
    id: 10,
    title: 'Smartphone',
    category: 'electronics',
    price: 900,
    discount: 12,
    inStock: false,
    rating: 4.7,
  },
  {
    id: 11,
    title: 'Tablet',
    category: 'electronics',
    price: 600,
    discount: 8,
    inStock: true,
    rating: 4.4,
  },
  {
    id: 12,
    title: 'Printer',
    category: 'electronics',
    price: 220,
    discount: 0,
    inStock: false,
    rating: 3.8,
  },
  {
    id: 13,
    title: 'Bookshelf',
    category: 'furniture',
    price: 250,
    discount: 15,
    inStock: true,
    rating: 4.2,
  },
  {
    id: 14,
    title: 'Sofa',
    category: 'furniture',
    price: 850,
    discount: 30,
    inStock: true,
    rating: 4.6,
  },
  {
    id: 15,
    title: 'Lamp',
    category: 'furniture',
    price: 45,
    discount: 0,
    inStock: true,
    rating: 4.0,
  },
  {
    id: 16,
    title: 'Wardrobe',
    category: 'furniture',
    price: 700,
    discount: 10,
    inStock: false,
    rating: 4.3,
  },
  {
    id: 17,
    title: 'Pencil',
    category: 'stationery',
    price: 1,
    discount: 0,
    inStock: true,
    rating: 3.7,
  },
  {
    id: 18,
    title: 'Marker',
    category: 'stationery',
    price: 4,
    discount: 0,
    inStock: false,
    rating: 4.1,
  },
  {
    id: 19,
    title: 'Backpack',
    category: 'accessories',
    price: 80,
    discount: 10,
    inStock: true,
    rating: 4.5,
  },
  {
    id: 20,
    title: 'Wallet',
    category: 'accessories',
    price: 40,
    discount: 5,
    inStock: true,
    rating: 4.2,
  },
  {
    id: 21,
    title: 'Watch',
    category: 'accessories',
    price: 250,
    discount: 20,
    inStock: false,
    rating: 4.6,
  },
  {
    id: 22,
    title: 'Sunglasses',
    category: 'accessories',
    price: 120,
    discount: 15,
    inStock: true,
    rating: 4.4,
  },
  {
    id: 23,
    title: 'T-Shirt',
    category: 'clothes',
    price: 30,
    discount: 0,
    inStock: true,
    rating: 4.0,
  },
  {
    id: 24,
    title: 'Jeans',
    category: 'clothes',
    price: 90,
    discount: 10,
    inStock: true,
    rating: 4.3,
  },
  {
    id: 25,
    title: 'Jacket',
    category: 'clothes',
    price: 200,
    discount: 25,
    inStock: false,
    rating: 4.5,
  },
  {
    id: 26,
    title: 'Sneakers',
    category: 'shoes',
    price: 140,
    discount: 15,
    inStock: true,
    rating: 4.7,
  },
  {
    id: 27,
    title: 'Boots',
    category: 'shoes',
    price: 180,
    discount: 20,
    inStock: false,
    rating: 4.1,
  },
  {
    id: 28,
    title: 'Sandals',
    category: 'shoes',
    price: 60,
    discount: 0,
    inStock: true,
    rating: 3.9,
  },
  {
    id: 29,
    title: 'Coffee Machine',
    category: 'home appliances',
    price: 350,
    discount: 18,
    inStock: true,
    rating: 4.8,
  },
  {
    id: 30,
    title: 'Vacuum Cleaner',
    category: 'home appliances',
    price: 280,
    discount: 12,
    inStock: false,
    rating: 4.4,
  },
];

// easy
// filter 
// Получить все товары, которые есть в наличии
const inStockProducts = products.filter(product => product.inStock);
console.log('Товары в наличии:', inStockProducts);

//Получить все товары из категории electronics.
const electronics = products.filter (product => product.category =='electronics');
console.log('Товары категории электроника', electronics);

//Получить все товары, цена которых больше 100.
const pricyProducts = products.filter(product => product.price > 100);
console.log ('Товары дороже 100', pricyProducts);
//map возвращает измененный массив
//Получить массив только с названиями товаров. Элемент - элемент.что нужно взять.
const name = products.map(product => product.title);
console.log ('Названия товаров', name);
//Получить массив только с ценами товаров.
const value = products.map(product => product.price);
console.log ('Цены',value);
//Получить массив строк в формате: Laptop - 1200


const nameAndPrice = products.map(product => product.title + '-' + product.price);
console.log ('Товар и его цена', nameAndPrice);

//forEach: (Тут константу не получилось создать); считает, не возвращает массив
//Вывести в консоль название каждого товара.
// const id = products.forEach(product => {console.log(product.name)});
products.forEach(product => console.log(product.title));
//console.log ('Товар и его цена', id);

//Вывести в консоль цену каждого товара.
//const id =
products.forEach(product => console.log('Цена через foreach ' +product.price));
// console.log ('Цена через foreach', id);
//Вывести в консоль строку для каждого товара в формате: Product: Laptop
products.forEach(product => console.log(product.title +' -'+ product.price ));

//find

//Найти товар с id: 5.
let findId = products.find(product =>product.id ==5);
console.log(findId.title);
//Найти товар с названием Mouse.
let findTitle = products.find(product => product.title =='Mouse');
console.log(findTitle);
//Найти первый товар из категории furniture.
let findFirst = products.find(product => product.category =='furniture');
console.log(findFirst);

//Уровень средний:

//filter:
//Получить все товары, которые есть в наличии и стоят дешевле 500.
let filterAllproduct = products.filter(product => product.inStock && product.price <500);
console.log(filterAllproduct);
//Получить все товары, у которых скидка больше 0.
let discountProduct = products.filter(product => product.discount >0)
console.log('скидка больше 0', discountProduct);
//Получить все товары с рейтингом 4.5 и выше.
let highRateProduct = products.filter(product => product.rating >=4.5)
console.log('рейтинг 4.5 и выше', highRateProduct);
//Получить все товары из категории clothes, которые есть в наличии.
let clothesProducts = products.filter(product => product.inStock == true && product.category =='clothes');
console.log('категория clothes на стоке', clothesProducts);

// map:
// Получить новый массив товаров, где у каждого товара будет новое поле finalPrice.
const newMapArray = products.map(product => {
  return {
    ...product,
    finalPrice: product.price - (product.price * (product.discount/100)) 
  };
});
console.log('категория clothes на стоке', newMapArray);

// Получить массив объектов только с полями title и price. //квадратные скобки для перечеслия элементов
let titleAndPrice = products.map(product => [product.title,product.price]);
console.log('Вернуть название и цену', titleAndPrice); 

// Получить массив, где названия всех товаров будут в верхнем регистре.
let capital = products.map(product =>{
return {
...product,
title: product.title.toUpperCase()
};
}); console.log('всё заглавное', capital);

// Получить массив строк в формате: Laptop: electronics //строка?

let notebook = products.map(product => {
  return `${product.title}: ${product.category}`;
});
console.log(notebook);

// forEach:

// Посчитать общую стоимость всех товаров.
let total = 0;
products.forEach(product => total= total + product.price);
console.log('общая стоимость техники отдела Mons', total);
// Посчитать количество товаров, которые есть в наличии.
let qty =0;
products.forEach(product => { if (product.inStock) 
  qty++}  );
console.log('всего товаров', qty);
// Собрать в отдельный массив только названия товаров.
let names = products.map(product => product.title);
console.log(names);
// Посчитать количество товаров со скидкой.
let count =0;
products.forEach(product => {if (product.discount >0) count ++} );
console.log('товаров со скидкой',count);
// find:

// Найти первый товар, которого нет в наличии.
let findMissedId = products.find(product =>{if(product.inStock==false)
 return product.id});
console.log(findMissedId.title);
// Найти первый товар дороже 1000.
let iphone = products.find(product => {if(product.price>1000) return product.title});
console.log('товар дороже 1к',iphone);
// Найти первый товар со скидкой больше 20.
let goodDiscount = products.find(product => {if(product.discount>20) return product.title});
console.log('товар со скидкой >20%',goodDiscount)
// Найти первый товар с рейтингом ниже 4. (Здесь уже понял, что метод выходит когда возвращается первый true)
let badScore = products.find(product => {if(product.rating<4) return true});
console.log('ненадежный товар с рейтингом ниже 4',badScore);

//hard boiled lvl
// filter:

// Получить все товары, которые относятся к категории electronics, есть в наличии и имеют рейтинг выше 4.5.
let complexItem = products.filter(product => product.category='electronics'&& product.inStock == true && product.rating >4.5);
console.log('все товары, которые относятся к категории electronics, есть в наличии и имеют рейтинг выше 4.5', complexItem);
// Получить все товары, у которых цена после скидки меньше 400.
let afterDiscount = products.filter(product => (product.price - product.price * product.discount/100) < 400);
console.log('товары, цена после скидки меньше 400',afterDiscount);
// Получить все товары, у которых название длиннее 6 символов.
let shortName = products.filter(product => (product.title.length > 6));
console.log('товары, у которых название длиннее 6 символов.',shortName);
// Получить все товары, которые либо стоят дороже 500, либо имеют скидку больше 20.
let oneOrtwo = products.filter(product => (product.title.price > 500) || product.discount>20);
console.log('товары, которые либо стоят дороже 500, либо имеют скидку больше 20',oneOrtwo);

// map:
// Получить массив объектов для select:
// [
//   {
//     label: 'Laptop',
//     value: 1,
//     disabled: false
//   }
// ]
// Где label — название товара, value — id, disabled — true, если товара нет в наличии.
let changedArr = products.map(product =>  {
  return{
//  ...product,
  label: product.title,
  value: product.id,
  disabled: product.inStock ==false 
  }
});
console.log('измененный массив', changedArr);

// Получить новый массив товаров, где будет поле status:
// 'Available'

// если товар есть в наличии, и

// 'Not available'  если товара нет.

let changedArr2 = products.map(product => {
  return {
    ...product,
     status:(product.inStock==true) ? 'Available' : 'Not available' // тернарный
   }
})
console.log('измененный массив inStock', changedArr2);



// Получить массив строк в формате:
// 'Laptop: electronics, final price: 1080'
// Получить новый массив товаров, где цена будет уже с учетом скидки.
let changedArr3 = products.map(product => {
 return `${product.title}, ${product.price = product.price - product.price*(product.discount/100)}`;
})

console.log('Получить новый массив товаров, где цена будет уже с учетом скидки.', changedArr3);

// forEach:
// Сгруппировать товары по категориям.
// Ожидаемый результат:
// {
//   electronics: ['Laptop', 'Mouse', 'Keyboard'],
//   furniture: ['Desk', 'Chair']
// }

let groupedItems = products.map (product => { product.category

})
// let count =0;
// products.forEach(product => {if (product.discount >0) count ++} );
// console.log('товаров со скидкой',count);


// Создать объект, где ключом будет id товара, а значением — сам товар.
// Ожидаемый результат:
// {
//   1: { id: 1, title: 'Laptop' },
//   2: { id: 2, title: 'Mouse' }
// }
let newObject = {};

products.forEach(product => newObject[product.id] = 'id '+ product.id +' '+ 'title:'+product.title );
console.log(newObject);

//Найти самый дорогой товар через forEach.
let mostExpensive = products[0];
products.forEach(product => {if (product.price> product.mostExpensive) 
    mostExpensive = product;
    });
console.log('самый дорогой товар', mostExpensive);

// find:

// Найти первый товар, который есть в наличии, относится к electronics и имеет рейтинг выше 4.5.
let goodProduct = products.find (product => {if (product.category='electronics'&& product.rating >4.5)
  return product.title
});
console.log('Найти первый товар, который есть в наличии, относится к electronics и имеет рейтинг выше 4.5.',goodProduct);
// Найти первый товар, у которого цена после скидки меньше 100.
let goodPriceProduct = products.find (product => {if (product.price - product.price*(product.discount/100) < 100)
  return product.title;
});
console.log('Найти первый товар, у которого цена после скидки меньше 100.',goodPriceProduct);
// Найти товар по названию без учета регистра.


// Уровень комбинированный:

// filter + map:

// Получить все товары в наличии и вернуть только их названия.
// Получить все товары со скидкой и вернуть массив объектов:
// [
//   {
//     title: 'Laptop',
//     oldPrice: 1200,
//     finalPrice: 1080
//   }
// ]

let combi1  = products.filter(product => product.inStock);
products.map (product => product.discount >0);
console.log('123',combi1); 