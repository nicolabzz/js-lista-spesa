const listItem = [
    'brain',
    'eyes',
    'blood',
    'skulls',
    'bats',
    'web'
];

const output = document.getElementById('output');

i = 0;

while (i < listItem.length) {

    const li = document.createElement('li');

    li.innerHTML = listItem[i];

    output.append(li);

    i++;

};