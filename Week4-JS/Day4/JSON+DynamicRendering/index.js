import products from './products.json' assert {type: "json"}

let productContainer = document.querySelector('.productContainer')


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
        ${product.desc}
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