console.log('== background js');

let result = []

const download = function(content, fileName, contentType) {
    let a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const DirectlyOpenTab = function(request, sender) {
    if (sender) {
        // create tab
        chrome.tabs.create({
            url: request.url,
            active: false
        }, function(tab) {
          const id = tab.id;
          setTimeout(function() {
              // script
              if (request && request.script) {
                  chrome.tabs.executeScript(id, { file: request.script });
              }
          }, 1000);
        });
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log('== request', request);
    if(request && request.action === 'saveTitle') {
      result.push(request);
    }
    else if(request && request.action === 'output'){
      let outputText = 'title, first recommend\n';
      result.forEach((item, i) => {
        const line = item['title'] + '\t' + item['firstRecTitle'] + '\n';
        outputText = outputText + line;
      });

      download(outputText, 'output.tsv', 'text/plain');
      result = []
    }
    else if(request && request.action==='openLink' && request.url) {
      request.url.forEach((target, i) => {
        DirectlyOpenTab({action: request.action, url: target, script: 'scripts/switch.js'}, true);
      });
    }
});
