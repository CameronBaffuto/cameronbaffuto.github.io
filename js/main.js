function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['Bay', 'Mad', 'Ajx', 'Juv'];

const result = getRandomItem(array);
console.log(result);
