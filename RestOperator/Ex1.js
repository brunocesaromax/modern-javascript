const pairNumbers = (...array) => {
    return array.filter(el => el % 2 === 0);
}

console.log(pairNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
