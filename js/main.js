function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let countThrow = prompt('Введите количество бросков');

countThrow = Number(countThrow);

let numberOfSides = prompt('Введите количество сторон кубика');

countThnumberOfSidesrow = Number(numberOfSides);

for (var i=1; i<=countThrow; i++) {
    document.write(getRandomInt(1, numberOfSides) + '<br>');
}
