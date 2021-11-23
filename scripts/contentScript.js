console.log('open each page')

const getUrl = (xpath) => {
  const allResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  let resultList = allResult.iterateNext();
  let output = [];
  while (resultList) {
    result = 'https://www.youtube.com' + resultList.textContent;
    output.push(result);
    resultList = allResult.iterateNext();
  }
  return output
}

const vLinkXpath = 'descendant::a[@id="video-title-link"]/@href';
const allTheLink = getUrl(vLinkXpath);
const topThree = allTheLink.slice(0, 3);

console.log(topThree);

chrome.runtime.sendMessage({action: 'openLink', url: topThree});
