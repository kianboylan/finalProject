//The content scripts only run so long as the site it has access to is active. For example, I have Gmail.com set up in the content script so as long as that link is open and running, this script will be too. When the link is closed, unlike the background script, it will no longer run. 
// The following function will allow for communication between the content script and background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "phishingDetector");
         //Here, I would like the extension to extract the information from the selected Gmail inbox in order to send it through the ML and scan for phishing. In order to optimally train the ML, I would like to include all aspects of the email, i.e. the sender, the subject of the email, and the content of the email

})