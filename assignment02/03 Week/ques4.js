//4. Create a function called likeProduct. This function will helps to like to the product if 
//it is not liked and remove like if it was liked.

function likeProduct(product){
    if(product=="Unliked"){
        product="Liked";
        console.log("Liked")
    }
    else{
        product="Unliked";
        console.log("Unlike")
    }
}
likeProduct(product="Unliked")