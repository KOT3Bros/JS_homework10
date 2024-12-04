const productList = document.querySelector('[id="product-list"]');

data.forEach(product => {
    const productEl = document.createElement('li');
    productEl.classList.add('product')

    const productImg = document.createElement('img');
    productImg.classList.add('product__img')
    productImg.src = product.image
    productImg.setAttribute('alt', 'image')

    const productTitle = document.createElement('h2');
    productTitle.classList.add('product__title')
    productTitle.textContent = product.title

    const productDescription = document.createElement('p');
    productDescription.classList.add('product__description')
    productDescription.textContent = product.description

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price')
    productPrice.textContent = product.price

    const productButton = document.createElement('button');
    productButton.classList.add('product__button')
    productButton.textContent = 'Add to Cart'

    productList.appendChild(productEl)
    productEl.appendChild(productImg)
    productEl.appendChild(productTitle)
    productEl.appendChild(productDescription)
    productEl.appendChild(productPrice)
    productEl.appendChild(productButton)
});