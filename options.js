const options = document.querySelectorAll('.options');

options.forEach((item, i) => {
  item.addEventListener('click', (e)=>{
    const id = e.target.id;
    if(id === 'openSample'){
      chrome.tabs.executeScript({file: 'scripts/contentScript.js'});
    } else if (id === 'result'){
      chrome.tabs.executeScript({file: 'scripts/output.js'});
    }
  })
});
