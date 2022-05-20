const produit = window.location.search.split("?").join("");
console.table(produit);

let getcanape = [];

const fetchcanape = async () => {
    await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((reponse) =>reponse.json())
    .then((promise) => {
        getcanape = promise;
        console.table(getcanape);
    });

};

const displaycanape = async ()=> {
    await fetchcanape();

    document.getElementById("photo").innerHTML = `
    <img src="${getcanape.imageUrl}" alt="Photographie d'un canapé">
    `
};

displaycanape();