function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let countThrow = prompt('Введите количество бросков');

countThrow = Number(countThrow);

let numberOfSides = prompt('Введите количество сторон кубика');

numberOfSides = Number(++numberOfSides);


document.write(`Вы хотите бросить кубик ${countThrow} раз <br>`)
document.write(`Количество сторон кубика ${numberOfSides - 1} <br><br>`)

for (let i=1; i<=countThrow; i++) {
    document.write(getRandomInt(1, numberOfSides) + '<br>');
}
