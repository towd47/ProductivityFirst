function addItem(item) {
    chrome.storage.local.get({["items"]: []}).then((result) => {
        let list = result.items
        list.push(item)
        chrome.storage.local.set({items: list})
    });
}

function addItemToDom(item, parent) {
    let obj = document.createElement("input");
    obj.type = "checkbox";
    obj.className = "popup-checkbox";
    let label = document.createElement("label");
    label.className = "popup-checkbox-label";
    label.append(document.createTextNode(item));
    parent.appendChild(obj);
    parent.appendChild(label);
    parent.appendChild(document.createElement("br"));
}

function displayItems(parent) {
    chrome.storage.local.get({["items"]: []}).then((result) => {
        for (item of result.items) {
            addItemToDom(item, parent);
        }
    })
}
