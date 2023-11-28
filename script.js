function productImage(i) {
    const num = i % 3;
    if (num === 0) {
        return 'image/product1.png';
    } else if (num === 1) {
        return 'image/product2.png';
    } else {
        return 'image/product3.png';
    }
}

let products = []
for (let i = 0; i < 12;i++){
    products.push({
        name: `Product ${i+1}`,
        image: productImage(i),
        price: (Math.random() * 100).toFixed(2),
    })
}

let container = document.getElementById('container_item');
for (let product of products) {
  let itemProduct = document.createElement('div');
  itemProduct.classList.add('item');
  itemProduct.innerHTML = `
    <img src=${product.image}>
    <h4>${ product.name }</h4>
    <p class="price">$${ product.price }<p>
    <button class="buy-button">Buy</button>
    <button class="detail-button">Detail</button>
    `;
    container.appendChild(itemProduct);

}