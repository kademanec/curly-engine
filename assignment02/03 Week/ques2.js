//Create a function called signUp which allows user to add to the collection. 
//If user exists, inform the user that he has already an account.

let users = [];
function signUp(user){
    
    if(users.includes(user)){
        console.log( "User already exists")
    }
    else{
        users.push(user);
        console.log(users)
    }
    
}

signUp("Chinmaya")
signUp("Puneeth")
signUp("Chinmaya")

//b. Create a function called signIn which allows user to sign in to the application


function signIn(user){
    if(users.includes(user)){
        console.log("Hi Welcome to the dashboard")
    }
    else{
        console.log("User not found")
    }
    
}
signIn("unknown");