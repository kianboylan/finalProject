// The runtime API is used to retrieve the service worker, which will be background.js in our case, 
//while also returning details about the manifest, as well as listening out for and responding to events in the extension.
//This background script helps us set up the context menu
//This background script will be running for as long as this extension exists, performing tasks in the, you guessed it, background
chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Phishing Detection",
        contexts: ["all"],
        id: "phishingDetector"
    });
});

//This listens out for when the phishing detection option is clicked on the context menu
chrome.contextMenus.onClicked.addListener(function (info, tab){
    if (info.menuItemId === "phishingDetector"){
        // This sends a message to the content script to begin the detection process
        //The tabs API interacts with the browsers tab system. This has the permission to create, moduft, and rearrange tabs in the browser
        chrome.tabs.sendMessage(tab.id, { action: "phishingDetector"});
    }
});

