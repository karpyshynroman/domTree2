'use strict';
let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
function createTree(container, dataVar) {
    container.append(createTreeHelper(dataVar));
}

function createTreeHelper(dataVar) {
    const ul = document.createElement('ul');
    console.log(Object.keys(dataVar).length);
    if (!Object.keys(dataVar).length)
        return;
    Object.keys(dataVar).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        if (createTreeHelper(dataVar[item])){
            li.append(createTreeHelper(dataVar[item]));
        }
        ul.append(li);
    });

    return ul;
}

createTree(document.getElementById('container'), data);
