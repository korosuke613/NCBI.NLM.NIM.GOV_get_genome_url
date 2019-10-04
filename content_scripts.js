// タグを取得
chrome.runtime.sendMessage({
  value: document.getElementsByClassName("gb-main")[0].innerHTML
});