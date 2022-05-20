class Basket {
    constructor(){
        let basket = localStorage.getItem ("basket");
        if (basket == null ){
            this.basket = [];   
        } else {
            this.basket = JSON.parse(basket);
        }
    }

save() {
    localStorage.setItem("basket", JSON.stringify(this.basket));
}
add(product){
    let foundProduct = this.basket.find(p => p.id == product.id);
    if ( quantityProduct != undefined ){
        foundProduct.quantity++;
    }else {
        product.quantity= 1 
        this.basket.push(product)
    }
    this.save()
}
remove(product){
    let foundProduct = this.basket.find(p => p.id != product.id);
    this.save()
}
changeQuantity(product,quantity){
    let foundProduct = this.basket.find(p => p.id == product.id);
    if ( quantityProduct != undefined ){
        foundProduct += quantity;
    } if (foundProduct.quantity <= 0) {
        this.remove(product)
    }else {
        this.save()
    }   
}
numberproduct(){
    let number = 0; 
    for(let product of this.basket){
        number += product.quantity;
    }
    return number;
}
price(){
    let total = 0; 
    for(let product of this.basket){
        number += product.quantity * product.price;
    }
    return number;
}
}