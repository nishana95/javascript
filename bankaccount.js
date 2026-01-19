// let accounts=[]
// while (1) {
//     console.log("1 .Create account")
//     console.log("2. Show accounts")
//     console.log("3. Deposite")
//     console.log("4. Withdraw")
//     console.log("5. Break")

//     const prompt = require("prompt-sync")();
//     var choice = parseInt(prompt("Enter the choice : "))    ;


//     switch (choice) {
//         case 1:
//             const name = prompt("Enter name:");
//             const phone=parseInt(prompt("Enter Phone: "))
//             const initialBalance = parseFloat(prompt("Enter amount:"));
//             accounts.push(name);
//             accounts.push(phone);
//             accounts.push(initialBalance)
//             console.log(accounts)
//             break;
//         case 2:
//             for (let i = phone) {
//             console.log(accounts);
//         }

//             console.log(accounts)
//             break;
//         case 3:
//             const phone = parseInt(prompt("Enter Phone: "))
//             const amount = parseFloat(prompt("Enter amount to deposit:"));
//             accounts.splice(

//              break;
//         case 4:c=a/b
//             console.log(c)
//             break;
//         case 5:
//             break;
//     }
// }


let bankAccounts = [];

while (1) {
    console.log("1 .Create account")
    console.log("2. Show accounts")
    console.log("3. Deposite")
    console.log("4. Withdraw")
    console.log("5. Break")

    const prompt = require("prompt-sync")();
    var choice = parseInt(prompt("Enter the choice : "));

    switch (choice) {
        case 1:
            let name = prompt("Enter name:");
            let phone = prompt("Enter phone number:");
            let amount = parseFloat(prompt("Enter initial amount:"));
            bankAccounts.push(name);
            bankAccounts.push(phone);
            bankAccounts.push(amount)
            console.log("Account created successfully!");
            break;

        case 2:
            let searchPhoneShow = prompt("Enter phone number to show details:");
            // let foundAccountShow = null;
            for (let i = bankAccounts; i < bankAccounts.length; i++) {
            if (bankAccounts[i].phone === searchPhoneShow) {
                console.log(`Name:${i[0]}`)
                console.log(`Phone:${i[1]}`)
                console.log(`Amount :${i[2]}`)
            } else {
                console.log("Account not found.");
            }
            break;
        }
        case 3:
            let searchPhoneDeposit = prompt("Enter phone number to deposit:");
            let foundAccountDeposit = null;
            for (let i = 0; i < bankAccounts.length; i++) {
                if (bankAccounts[i].phone === searchPhoneDeposit) {
                    foundAccountDeposit = bankAccounts[i];
                    break;
                }
            }

            if (foundAccountDeposit) {
                let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                if (depositAmount > 0) {
                    foundAccountDeposit.balance += depositAmount;
                    console.log(`Deposited :${depositAmount}`)
                    console.log(`New balance:${foundAccountDeposit.balance}`)
                } else {
                    console.log("Invalid amount.");
                }
            } else {
                console.log("Account not found.");
            }
            break;

        case 4: 
            let searchPhoneWithdraw = prompt("Enter phone number to withdraw:");
            let foundAccountWithdraw = null;
            for (let i = 0; i < bankAccounts.length; i++) {
                if (bankAccounts[i].phone === searchPhoneWithdraw) {
                    foundAccountWithdraw = bankAccounts[i];
                    break;
                }
            }

            if (foundAccountWithdraw) {
                let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                if (withdrawAmount > 0 && withdrawAmount <= foundAccountWithdraw.balance) {
                    foundAccountWithdraw.balance -= withdrawAmount;
                    console.log("Withdrawn " + withdrawAmount + ". New balance: " + foundAccountWithdraw.balance);
                } else if (withdrawAmount > foundAccountWithdraw.balance) {
                    console.log("Insufficient funds.");
                } else {
                    console.log("Invalid amount.");
                }
            } else {
                console.log("Account not found.");
            }
            break;

        case 5:
            console.log("Exiting Programme")
            break;

        default:
            console.log("Invalid choice. Please enter a number from 1 to 5.");
    }
}
