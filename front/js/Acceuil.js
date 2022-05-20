acceuil ()

async function acceuil() {
    const canapes = await getCanapes()
    for (canape of canapes)
    displaycanape(canape)
}

function getCanapes(){
    return fetch("http://localhost:3000/api/products")
    .then(function(reponse) {
        return reponse.json()
    })
    .then(function(canapes){
        return canapes
    })

}
function displaycanape(){
    document.getElementById("items").innerHTML += ` 
    <a href="./product.html?id?${canape._id}">
    <article>
      <img src="${canape.imageUrl}" alt="photo canapé">
      <h3 class="productName">${canape.name}</h3>
      <p class="productDescription">${canape.description}</p>
    </article>
  </a> 
    `
}
