const max = prompt("enter maximum number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

// console.log(random)

while(true){
    if(guess == "quit"){
        console.log("user quit")
        break;
    }
    if(guess == random){
        console.log("woooooooooooooooooooooooo")
        break;
    }else{
        guess = prompt("your guess is wrong! please try again")
    }
}