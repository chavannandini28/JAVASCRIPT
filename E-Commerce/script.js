// /****local storage concept****/
// // str = 'Batch81'

// // localStorage.setItem('batch', str)
// // str2 = localStorage.getItem('batch')
// // console.log(str2)

// // objBatch = {
// //     id:243,
// //     name:'Batch81'
// // }

// // localStorage.setItem('b', JSON.stringify(objBatch))
// // newObj = JSON.parse(localStorage.getItem('b'))
// // console.log(newObj)
// // console.log(typeof(newObj))









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

// ✅ FIX
function getFromLocal() {
    return JSON.parse(localStorage.getItem('B81')) || []
}

function saveCartToLocal(c){
    localStorage.setItem('Cart81', JSON.stringify(c))
}

// ✅ FIX
function getCartFromLocal (){
    return JSON.parse(localStorage.getItem('Cart81')) || []
}


// ================= RENDER =================
function renderProducts() {

    let renderProductsData = getFromLocal()   // ✅ FIX

    if (renderProductsData.length === 0) {
        renderProductsElmt.innerHTML = "<p>No Products</p>"
        return
    }

    renderProductsElmt.innerHTML = `
    <div class="row">

    ${renderProductsData.map((prod, index) => `
        <div class='col-12 col-md-6 col-lg-4 mb-3'>

            <div class="card h-100">
                <div class="card-body">
                    <h4>${prod.title}</h4>
                    <p>${prod.description}</p>
                    <h5>Price : ₹${prod.price}</h5>

                    <button class="btn btn-primary" onclick="addToCart(${prod.id})">
                        Add To Cart
                    </button>
                </div>
            </div>

        </div>
    `).join('')}

    </div>
    `
}


// ================= ADD PRODUCT =================
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

    getProd = getFromLocal()  // ✅ always array

    getProd.push(newProduct)

    saveToLocal(getProd)

    renderProducts()

    // clear inputs
    titleElmt.value = ''
    descriptionElmt.value = ''
    categoryElmt.value = ''
    brandElmt.value = ''
    priceElmt.value = ''
    quantityElmt.value = ''
}


// ================= ADD TO CART =================
function addToCart(id){

    const getCArtFromLocal = getCartFromLocal()  // ✅ FIX

    getProd = getFromLocal()

    findIndex1 = getProd.findIndex((p)=> p.id == id)

    if(findIndex1 == -1 ){
        alert('Cant add to cart')
        return
    }

    newCartItem = getProd[findIndex1]

    // ✅ CHECK IF ALREADY IN CART
    let existingIndex = getCArtFromLocal.findIndex((c)=> c.id == id)

    if(existingIndex !== -1){
        getCArtFromLocal[existingIndex].quantity += 1
    } else {
        getCArtFromLocal.push({
            id: newCartItem.id,
            title: newCartItem.title,
            price: newCartItem.price,
            quantity: 1
        })
    }

    saveCartToLocal(getCArtFromLocal)

    cartLengthElmt.textContent = getCArtFromLocal.length
}


// ================= LOAD =================
window.addEventListener('DOMContentLoaded', () => {

    getProd = getFromLocal()

    if (!getProd) {
        saveToLocal(products)
    }

    getCart = getCartFromLocal()

    if(!getCart){
        saveCartToLocal(cart)
    }

    cartLengthElmt.textContent = getCart.length

    renderProducts()   // ✅ moved after init
})