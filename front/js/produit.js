produit ()


async function produit () {
    const canapeid = getCanapeid
    const canape = await getCanapes(canapeid)
    console.table(canapeid)
    displaycanape(canape)
}

function getCanapeid () {
    return new URL(location.href).searchParams.get("id")
}

function getCanapes(canapeid){
    return fetch(`http://localhost:3000/api/products/${canapeid}`)
    .then(function(reponse) {
        return reponse.json()
    })
    .then(function(canapes){
        return canapes
    })

}
function displaycanape(canape){
    document.getElementById("photo").innerHTML = ` 
    <img src="${canape.imgUrl}" alt="Photographie d'un canapé">
    `
    document.getElementById("title").innerHTML = ` 
    <h1>${canape.name}<h1>
    `
    document.getElementById("price").innerHTML = ` 
    <p>${canape.price}<p>
    `
}