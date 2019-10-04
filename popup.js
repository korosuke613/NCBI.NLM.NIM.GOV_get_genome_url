var content = chrome.extension.getBackgroundPage().textContents; //.getElementsByClassName('assm');

var htmlObject = document.createElement('div');
htmlObject.innerHTML = content;

var assm = htmlObject.getElementsByClassName("assm")[0].innerText
var kakko_pattern = /(?<=\().*?(?=\))/;

var chrom = htmlObject.getElementsByClassName("chrom")[0].innerText
var range = htmlObject.getElementsByClassName("range")[0].getElementsByTagName('span')[0].innerText
range = range.replace(/,/g, "");
range = range.split(' ');
var from = range[0];
var to = range[2]; 


var div = document.getElementById('textView');
div.textContent = `${assm.match(kakko_pattern)}&chr=${chrom.match(kakko_pattern)}&from=${from}&to=${to}`;
