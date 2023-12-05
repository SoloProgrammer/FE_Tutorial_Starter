let productContainer = document.querySelector('.productContainer')
let h1 = document.querySelector('h1')

let btn = document.querySelector('.fetchbtn')

function renderProducts(products) {
    products.forEach((product) => {
        let productCard = `<div class="card">
        <div class="imgBox">
          <img
            src=${product.thumbnail}
            alt=".."
          />
          <div class="label">Best seller</div>
          <div class="view_similar">view similar</div>
        </div>
        <div class="content">
          <h1>${product.title}</h1>
          <p>
            ${product.description}
          </p>
          <div class="price">
            <span>Price: </span>
            <span>${product.price}$</span>
            <p class=${product.stock ? 'instock' : 'outstock'}>${product.stock > 0 ? "In Stock" : "Out of stock"}</p>
          </div>
          </div>
          <button>Add to cart</button>
        </div>`
        productContainer.innerHTML += productCard
    })
}

async function getProducts() {
    // GET, POST, PUT, DELETE

    // GET----
    try {
        // change the innerTExt of h1 to loading your products...
        // loading = true
        h1.innerText = 'Loading your products....'
        btn.disabled = true
        btn.innerText = 'loading..'
        let api = `https://dummyjson.com/products`
        let res = await fetch(api)
        let data = await res.json()
        renderProducts(data.products)
        // loading = false
        // remove the innertext of h1
        btn.disabled = false
        btn.innerText = 'Fetch Products'
        h1.innerText = ''
    } catch (error) {
        console.log(error.message);
    }
}

btn.addEventListener('click', getProducts)


// add a product with POST http request

let addBtn = document.querySelector('.addBtn')
let inpt = document.querySelector('input')

addBtn.addEventListener('click', async () => {
    let inptVal = inpt.value
    if (!inptVal) return

    let api = `https://dummyjson.com/products/add`
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: inptVal })
    }
    let res = await fetch(api, options)
    let data = await res.json()
    console.log(data);
})