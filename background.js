let textContents = '';

// content_scriptから得た情報をpopup.jsに送信
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        textContents = request.value;
    }
);