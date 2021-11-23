(function() {
    // read file which generated from contentscript
    chrome.runtime.sendMessage({action: 'output'});
})();
