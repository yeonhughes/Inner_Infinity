function largestProduct(n) {
    sequence = [];
    sorted = [];
    if (n >= 1) {
        for (i = 0; i < n; i++) {
            randInt = Math.floor(Math.random() * 50);
            sequence.push(randInt);
            sorted.push(randInt);
        }
    } else {
        product = 0;
    }

    sorted.sort((a, b) => {
        return a - b
    });
    max = sorted[sorted.length - 1];

    for (j = 0; j < sorted.length; j++) {
        if (sorted[j] < max && sorted[j + 1] === max) {
            product = sorted[j] * max;
        } else if (sorted.length === 1) {
            product = max;
        }
    }

    console.log(n);
    console.log(sequence);
    console.log(product);
}