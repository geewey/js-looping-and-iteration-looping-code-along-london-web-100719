// Code your solutions in this file

let array = ["Ada", "Brendan", "Ali"]
let eventName = "birthday"

function writeCards(array, eventName) {
    messages = []
    for (let i = 0; i < array.length; i ++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }

    console.log(messages);
}

writeCards(array, eventName)


let number = 10

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number --;
    }
}

countDown(number)