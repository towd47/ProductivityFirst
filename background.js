chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
        chrome.tabs.create({
            url: "options.html",
        });
    }
});

function handelLogic(activeInfo) {
    console.log("TODO");
}

function notifyRedirect() {
    console.log("redirected!")
}

function redirectFromShorts(tabId, tab) {
    if (tab.url.includes("www.youtube.com/shorts/")) {
        chrome.tabs.update(tabId, {
            url: "https://www.youtube.com/feed/subscriptions",
        });
        notifyRedirect()
    }
}

function redirectFromHome(tabId, tab) {
    if (tab.url.endsWith("www.youtube.com/")) {
        chrome.tabs.update(tabId, {
            url: "https://www.youtube.com/feed/subscriptions",
        });
        notifyRedirect()
    }
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status && changeInfo.status == "loading") {
        console.log(tab);
        redirectFromShorts(tabId, tab)
        redirectFromHome(tabId, tab)
    }
});
