let para = document.createElement("p");
let btn = document.createElement("button");
let header = document.createElement("h1");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let body = document.querySelector("body");

para.innerHTML = 'I’m a paragraph';
btn.innerHTML = 'Click me!';
header.innerHTML = 'I’m a header! Yay!';
div1.innerHTML = 'I hold everything!';
div2.innerHTML = 'I hold a paragraph and button!';

console.log(para);
console.log(div2);

div2.appendChild(para);
div2.appendChild(btn);
div1.appendChild(header);
div1.appendChild(div2);
body.appendChild(div1);