const selectedId = 'selected-item';
const workAttr = 'id';
const workListId = 'myList';

function getSpecialElement(param) {
  let actualList = document.getElementById(workListId);
  let selectedItem = document.getElementById(selectedId);
  if (selectedItem) {
    selectedItem.removeAttribute(workAttr);
  }
  if (actualList.hasChildNodes()) {
    if (param === 'last') {
      actualList.lastElementChild.setAttribute(workAttr, selectedId);
    } else {
      actualList.firstElementChild.setAttribute(workAttr, selectedId);
    }
  }
}

function getNextElement() {
  let selectedItem = document.getElementById(selectedId);
  if (selectedItem) {
    selectedItem.removeAttribute(workAttr);
    let nextItem = selectedItem.nextSibling;
    if (nextItem) {
      nextItem.setAttribute(workAttr, selectedId);
    } else {
      getSpecialElement('first');
    }
  } else {
    getSpecialElement('first');
  }
}

function getPreviousElement() {
  let selectedItem = document.getElementById(selectedId);
  if (selectedItem) {
    selectedItem.removeAttribute(workAttr);
    let nextItem = selectedItem.previousSibling;
    if (nextItem) {
      nextItem.setAttribute(workAttr, selectedId);
    } else {
      getSpecialElement('last');
    }
  } else {
    getSpecialElement('last');
  }
}

function addElement() {
  let actualList = document.getElementById(workListId);
  let newElem = document.createElement('li');
  newElem.innerText = "NEW ITEM";
  actualList.appendChild(newElem);
}

function removeListElement() {
  let actualList = document.getElementById(workListId);
  let lastElem = actualList.lastElementChild;
  if (actualList.childNodes.length > 0) {
    actualList.removeChild(lastElem);
  }
}

function addToBegin() {
  let actualList = document.getElementById(workListId);
  let newElem = document.createElement('li');
  let firstElem = actualList.firstElementChild;
  newElem.innerText = "NEW ITEM";
  actualList.insertBefore(newElem, firstElem);
}