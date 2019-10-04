let content = chrome.extension.getBackgroundPage().textContents; //.getElementsByClassName('assm');

let htmlObject = document.createElement('div');
htmlObject.innerHTML = content;

let assm = htmlObject.getElementsByClassName("assm")[0].innerText
let kakko_pattern = /(?<=\().*?(?=\))/;

let chrom = htmlObject.getElementsByClassName("chrom")[0].innerText
let range = htmlObject.getElementsByClassName("range")[0].getElementsByTagName('span')[0].innerText
range = range.replace(/,/g, "");
range = range.split(' ');
let from = range[0];
let to = range[2]; 


let div = document.getElementById('textView');
div.textContent = `${assm.match(kakko_pattern)}&chr=${chrom.match(kakko_pattern)}&from=${from}&to=${to}`;
