const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Insert a number: ', division => {
    let count = 0;

    if (division <= 0)
    {
        console.log(`Number: ${division}, not > 0`);
        readline.close();
    }

    if (division != parseInt(division, 10))
    {
        console.log(`Number: ${division}, not a integer`);
        readline.close();
    }

    for (let i = 0; i < division; i++) {
        if (i % 3 === 0) {
            count = count + i
        }

        if (i % 5 === 0) {
            count = count + i
        }
    }

    console.log(count);

    readline.close();
});