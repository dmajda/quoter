chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse({
    url:       document.location.href,
    selection: document.getSelection().toString(),
  });
});
