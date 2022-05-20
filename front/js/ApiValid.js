document.querySelector('#formulaire input[type="submit"]').addEventListener("click" ,(e) => {
    e.preventDefault();
    let valid = document.querySelectorAll('#formulaire').reportValidity();
    if(valid){
        fetch("https://localhost:3000/api/products")
        .then(response => response) 
            console.log(reponse => reponse.json)
        }
    })

