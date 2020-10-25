import $ from '../core';

$.prototype.html = function(content = null) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].textContent = content
    } else {
      return this[i].textContent
    }
  }

  return this
}

$.prototype.eq = function(n) {
  if (n === 'undefined') return this;
  if (!this[n]) console.error("[Error]: this item doesn't exist")
  else {
    const needEl = this[n];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
      delete this[i];
    }

    this[0] = needEl;
    this.length = 1;
  }

  return this;
}

$.prototype.index = function() {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item === this[0]
  }

  return childs.findIndex(findMyIndex) + 1;
}

$.prototype.find = function(selector) {
  if (!selector) return this;
  const copyObj = Object.assign({}, this);
  let numElems = 0;

  for (let i = 0; i < copyObj.length; i++) {
    let arr = copyObj[i].querySelectorAll(selector);
    if (!arr.length) continue

    for (let j = 0; j < arr.length; j++) {
      this[numElems] = arr[j];
      numElems++;
    }
  }

  this.length = numElems;

  const objLength = Object.keys(copyObj).length;
  for (; numElems < objLength; numElems++) {
    delete this[numElems]
  }

  return this;
}

$.prototype.closest = function(selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[i] = this[i].closest(selector)
      counter++;
    }
  }

  if (!counter) {
    console.warn(`not found elements with selector ${selector}`)
    return this;
  }

  this.length = counter;

  const objLength = Object.keys(this).length;
  for(; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
}

// Search for the first element only
$.prototype.siblings = function() {
  const copyObj = Object.assign({}, this);
  let numElems = 0;

  const initEl = copyObj[0];

  let arr = initEl.parentNode.children;

  for (let i = 0; i < arr.length; i++) {
    if (copyObj[0] === arr[i]) continue;
    this[numElems] = arr[i];
    numElems++;
  }

  this.length = numElems;

  const objLength = Object.keys(copyObj).length;
  for (; numElems < objLength; numElems++) {
    delete this[numElems]
  }

  return this;
}