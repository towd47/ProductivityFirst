const checklist = document.getElementById('checkbox-div')

function openMenu() {
    chrome.runtime.openOptionsPage()
}

function createItem() {
    let item = document.getElementById("new-item-text")
    chrome.storage.local.get({["items"]: []}, function (result) {
        let list = result.items
        list.push(item.value)
        chrome.storage.local.set({items: list})
    })
    addItemToDom(item.value, checklist)
    item.value = ''
}

function clearList() {
    chrome.storage.local.set({items: []})
    checklist.replaceChildren()
}

document.getElementById('openMenu').addEventListener('click', openMenu)
document.getElementById('create-item').addEventListener('click', createItem)
document.getElementById('clearList').addEventListener('click', clearList)

displayItems(checklist)