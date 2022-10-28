const listItem = [
    'brain',
    'eyes',
    'blood',
    'skulls',
    'bats',
    'webs'
];

const output = document.getElementById('output');

i = 0;

while (i < listItem.length - 1) {

    const li = document.createElement('li');

    li.innerHTML = listItem[i];

    output.append(li);

    i++;

};