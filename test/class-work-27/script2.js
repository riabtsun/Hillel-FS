// Дано три массива kitchenProducts, devicesProducts, cosmeticsProducts с товарами в разных категориях:

let kitchenProducts = [
  {
    type: 'grater',
    price: 10,
  },
  {
    type: 'pastry-bag',
    price: 25,
  },
  {
    type: 'scale',
    price: 5,
  },
  {
    type: 'whisk',
    price: 15,
  },
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000],
  },
  {
    type: 'laptop',
    price: [50, 1500],
  },
  {
    type: 'smartphone',
    price: [80, 2000],
  },
  {
    type: 'tablet',
    price: [20, 1300],
  },
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100,
  },
  {
    type: 'eyeshadow',
    price: 50,
  },
  {
    type: 'lipstick',
    price: 80,
  },
  {
    type: 'nail-polish',
    price: 200,
  },
  {
    type: 'perfume',
    price: 300,
  },
];
// Задача:

// Для каждой категории создать объект, который имеет лишь одно свойство category,
// в котором находится имя категории. Например, let Kitchen = {category: 'kitchen'};
// Всем товарам с массивов kitchenProducts, devicesProducts, cosmeticsProducts добавить в качестве объекта-прототипа объекты, созданные на первом шаге. После этого, дополнить каждый товар своими свойствами. Например:

function Items(category) {
  this.category = category;
}

Items.prototype.render = function () {
  let itemImg = ``;
  if (this.icon) {
    itemImg = `<img src='images/${this.category}/${this.type}.svg' alt='${this.type}' height='30px'>`;
  }
  return `<div class='box'>${itemImg}
            <p class='text'>Name:  <b>${this.type}</b></p> 
            <p> Price: <b>$${
              Array.isArray(this.price) ? this.price.join('-') : this.price
            }</b></p>
          </div>`;
};

let kitchen = new Items('kitchen');
let devices = new Items('devices');
let cosmetics = new Items('cosmetics');

function addPrototype(arr, proto) {
  return arr.map((category) => {
    let newCategory = Object.create(proto);
    for (let key in category) {
      newCategory[key] = category[key];
    }
    newCategory.icon = true;
    return newCategory;
  });
}

let kitchenProductsProto = addPrototype(kitchenProducts, kitchen);
let devicesProto = addPrototype(devicesProducts, devices);
let cosmeticsProto = addPrototype(cosmeticsProducts, cosmetics);

function renderItems(arr) {
  return arr.map((item) => {
    return item.render();
  });
}

function renderCategory(arr) {
  document.write(`
    <h2>Category: ${arr[0].category}</h2>
    <div class='item-category'> <br>
    ${renderItems(arr).join('')}</div>`);
}

renderCategory(kitchenProductsProto);
renderCategory(devicesProto);
renderCategory(cosmeticsProto);

// let Kitchen = { category: 'kitchen' };
// let Devices = { category: 'devices' };
// let Cosmetics = { category: 'cosmetics' };
//
// let modProducts = [];
//
// let getProto = (arr, proto) => {
//   return arr.map((products) => {
//     let newProducts = Object.create(proto);
//     for (let key in products) {
//       newProducts[key] = products[key];
//     }
//     return newProducts;
//   });
// };
//
// let arr = [
//   getProto(kitchenProducts, Kitchen),
//   getProto(devicesProducts, Devices),
//   getProto(cosmeticsProducts, Cosmetics),
// ];
//
// let renderAll = [];
// let newArr = [];
//
// arr.forEach((element) => {
//   element.map((obj) => {
//     renderAll.push(`
//     <div class="category__box">
//         <div class="category__img">
//             <img src="images/${obj.category}/${obj.type}.svg" alt="${obj.type}">
//         </div>
//       <div class="category__title">
//         <p class="title__name">
//           Name: <span>${obj.type}</span>${obj.type}
//         </p>
//         <p class="title__price">
//           Price: <span>$${
//             Array.isArray(obj.price)
//               ? String(obj.price[0]) + '-' + String(obj.price[1])
//               : obj.price
//           }></span> ${obj.type}
//         </p>
//       </div>
//     </div>`);
//   });
// });
//
// let res = arr.map((row) => {
//   return `
//   <div class="category">
//   <h2 class="category__title">Category: ${row[0]?.category}</h2>
//   <div class="category__content">${row
//     .map((box) => {
//       return `<div class="category__box">
//         <div class="category__img">
//             <img src="images/${box.category}/${box.type}.svg" alt="${box.type}">
//         </div>
//       <div class="category__title">
//         <p class="title__name">
//           Name: <span>${box.type}</span>${box.type}
//         </p>
//         <p class="title__price">
//           Price: <span>$${
//             Array.isArray(box.price)
//               ? String(box.price[0]) + '-' + String(box.price[1])
//               : box.price
//           }></span> ${box.type}
//         </p>
//       </div>
//     </div>`;
//     })
//     .join('')}</div>
// </div>
//   `;
// });
//
// let container = document.querySelector('#container');
// container.innerHTML = res;
