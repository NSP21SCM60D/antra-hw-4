const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: 'gold'
};

const keySelect = document.getElementById("key");
const valueSelect = document.getElementById("value");

const onKeyChange = (event) => {
    const newValue = state[event.target.value];

    if (newValue) {
        valueSelect.value = newValue;
    }
};

const onValueChange = (event) => {
    const target = event.target.value;
    const find = Object.entries(state).find(([_, v]) => v === target);

    if (find) {
        const [newKey] = find;
        keySelect.value = newKey;
    }
};

for (const [key, value] of Object.entries(state)) {
    const keyOption = document.createElement("option");
    const valueOption = document.createElement("option");

    keyOption.innerText = key;
    keyOption.value = key;

    valueOption.innerText = value;
    valueOption.value = value;

    keySelect.appendChild(keyOption);
    valueSelect.appendChild(valueOption);
}

keySelect.onchange = onKeyChange;
valueSelect.onchange = onValueChange;
