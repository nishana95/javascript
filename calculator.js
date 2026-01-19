while(1){
    console.log("1 .ADD")
    console.log("2. SUB")
    console.log("3. MUL")
    console.log("4. DIV")
    console.log("5. EXIT")

let c=0
    const prompt = require("prompt-sync")();
    var num = parseInt(prompt("Enter the choice : "))    ;
    var a = parseInt(prompt("Enter the first number : "))    ;
    var b = parseInt(prompt("Enter the second numebr : "))    ;

    switch(num){
        case 1:c=a+b
            console.log(c)
            break;
        case 2:c=a-b
            console.log(c)
            break;
        case 3:c=a*b
            console.log(c)
            break;
        case 4:c=a/b
            console.log(c)
            break;
        case 5:
            break;
    }
}