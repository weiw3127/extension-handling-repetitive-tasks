console.log('open each page')

const getURLtest = () => {
  const allResult = document.querySelectorAll('#video-title-link');
  let output = [];
  for(let i=0; i<3; i++){
    output.push(allResult[i].href)
  }
  return output;
}

const allTheLink = getURLtest();

console.log(allTheLink);

chrome.runtime.sendMessage({action: 'openLink', url: allTheLink});
