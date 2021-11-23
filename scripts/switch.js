console.log("== swtich");

setTimeout(function(){
  const recommend = document.querySelector('#video-title');
  const firstRecTitle = recommend.textContent.trim();
  const title = document.querySelectorAll('h1')[1].textContent.trim();

  console.log(`{ action: 'saveTitle', title: ${title}, firstRecTitle:${firstRecTitle}}`)

  chrome.runtime.sendMessage({ action: 'saveTitle', title: title, firstRecTitle:firstRecTitle}, function(tabId){});
}, 3000)
