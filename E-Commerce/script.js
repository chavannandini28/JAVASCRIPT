titleElmt = document.querySelector('#title')
descriptionElmt = document.querySelector('#description')
categoryElmt = document.querySelector('#category')
brandElmt = document.querySelector('#brand')
priceElmt = document.querySelector('#price')
quantityElmt = document.querySelector('#quantity')
cartLengthElmt = document.getElementById('cartLength')

const renderProductsElmt = document.querySelector('#renderProducts')

products = []
cart = []

function saveToLocal(p) {
    localStorage.setItem('B81', JSON.stringify(p))
}
function getFromLocal() {
    return JSON.parse(localStorage.getItem('B81'))
}
function saveCartToLocal(c){
    localStorage.setItem('Cart81', JSON.stringify(c))
}

function getCartFromLocal (){
    return JSON.parse(localStorage.getItem('Cart81'))
}

function renderProducts() {
    renderProducts = getFromLocal()
    console.log(renderProducts)
    renderProductsElmt.innerHTML = renderProducts.map((prod, index) => `
            <div class='col-12 col-md-6 col-lg-4 mr-2'>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">${prod.title}</h4>
    <p class="card-text">${prod.description}</p>
    <h5>Price : &#8377; <span>${prod.price}</span></h5>
    <button class="btn btn-primary" onclick="addToCart(${prod.id})">Add To Cart</button>
  </div>
</div>

            </div>
    `).join('')
}



function AddNewProduct() {
    titleV = titleElmt.value
    descrV = descriptionElmt.value
    categoryV = categoryElmt.value
    brandV = brandElmt.value
    priceV = Number(priceElmt.value)
    quantityV = Number(quantityElmt.value)

    newProduct = {
        id: Date.now(),
        title: titleV,
        description: descrV,
        category: categoryV,
        brand: brandV,
        price: priceV,
        quantity: quantityV
    }
    getProd = getFromLocal()
    console.log(getProd)
    getProd.push(newProduct)
    console.log(getProd)
    saveToLocal(getProd)
    renderProducts()

    titleElmt.value = ''
    descriptionElmt.value = ''
    categoryElmt.value = ''
    brandElmt.value = ''
    priceElmt.value = ''
    quantityElmt.value = '' 
    // close the modal after succesfully added prodcut 
}

function addToCart(id){
    const getCArtFromLocal = getCartFromLocal()

    getProd = getFromLocal()

    findIndex1 = getProd.findIndex((p)=> p.id == id)
    if(findIndex1 == -1 ){
        alert('Cant add to cart')
    }

    newCartItem = getProd[findIndex1]

    // create new object for id,name and price and new property as quantity only 
    // Before add check that item is presnt or not in cart array 
    // if present increase quantity by 1
    // add this object to cart

    getCArtFromLocal.push(newCartItem)
    saveCartToLocal(getCArtFromLocal)
    console.log(getCArtFromLocal)
    cartLengthElmt.textContent = getCArtFromLocal.length
}




window.addEventListener('DOMContentLoaded', () => {
renderProducts()
    getProd = getFromLocal()

    if (!getProd) {
        saveToLocal(products)
    }

    getCart = getCartFromLocal()
    if(!getCart){
        saveCartToLocal(cart)
    }
    cartLengthElmt.textContent = getCart.length

})




