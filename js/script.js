const list = ["latte", "pane", "pasta", "frutta", "carne"];
console.log(list);

let i = 0;
let listItem = "";

while (i < list.length) {
    const curItem = list[i];
    listItem += `<li>${curItem}</li>`
    i++;
}

console.log(listItem);

document.querySelector("ul").innerHTML = listItem;