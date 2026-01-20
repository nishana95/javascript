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
            // let searchPhoneShow = prompt("Enter phone number to show details:");
            // let foundAccountShow = null;
            // for (let i = 0; i < bankAccounts.length; i++) {
            //     if (bankAccounts[i].phone === searchPhoneShow) {
            //         foundAccountShow = bankAccounts[i];
            //         break;
            //     }
            //     if (foundAccountShow) {
            //         console.log(`Name:${foundAccountShow.name}`);
            //         console.log(`Phone:${foundAccountShow.phone}`);
            //         console.log(`Balance:${foundAccountShow.balance}`);
            //     } else {
            //        console.log("Account not found.");
            //     }
            //     break;


            // }




            let searchPhoneShow = prompt("Enter phone number to show details:");
            
            for (let i = 0; i < bankAccounts.length; i++) {
                if (bankAccounts[i].phone === searchPhoneShow) {
                    console.log(bankAccounts[i].name);
                    console.log(bankAccounts[i].phone);
                    console.log(bankAccounts[i].amount);

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
