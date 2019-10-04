// background.jsからページを取得
let content = chrome.extension.getBackgroundPage().textContents;

// HTMLを生成
let htmlObject = document.createElement('div');
htmlObject.innerHTML = content;

// assm, chrom, rangeを取得
let assm = htmlObject.getElementsByClassName("assm")[0].innerText
let chrom = htmlObject.getElementsByClassName("chrom")[0].innerText
let range = htmlObject.getElementsByClassName("range")[0].getElementsByTagName('span')[0].innerText

// fromとtoを抽出
range = range.replace(/,/g, "");
range = range.split(' ');
let from = range[0];
let to = range[2]; 

// 括弧内を抽出する正規表現
let kakko_pattern = /(?<=\().*?(?=\))/;

// popup.htmlに表示
let div = document.getElementById('textView');
div.textContent = `${assm.match(kakko_pattern)}&chr=${chrom.match(kakko_pattern)}&from=${from}&to=${to}`;
