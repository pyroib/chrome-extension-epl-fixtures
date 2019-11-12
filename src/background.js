chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
	let payload = {
		extension:"epl",
		action:"update"
	}
	chrome.tabs.sendMessage(tab.id, payload);
}