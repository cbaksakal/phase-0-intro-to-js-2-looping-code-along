// Code your solutions in this file
function writeCards(names, eventName) {
    const result = [];
    for (let i = 0; i < names.length; i++)
        result.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    return result;
}

function countDown(num) {
    while (num >= 0)
        console.log(num--);
}
