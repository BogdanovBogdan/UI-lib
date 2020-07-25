const { default: $ } = require("../core");

$.prototype.attr = function(nameAttr, valueAttr) {
	if (nameAttr && valueAttr) {
		if (!nameAttr.includes('data-')) {
			console.error(`Invalid attribute: ${nameAttr}\nData attribute must start with "data-"`);
			return;
		}
		
		for (let i = 0; i < this.length; i++) {
			this[i].setAttribute(`data-${nameAttr}`, valueAttr);
		}
	}

	return this;
}

$.prototype.removeAttr = function(nameAttr) {
	for (let i = 0; i < this.length; i++) {
		if (nameAttr) {
			this[i].removeAttribute(`data-${nameAttr}`);
		} else {
			const keys = Object.keys(this[i].dataset);
			
			for (let j = 0; j < keys.length; j++) {
				this[i].removeAttribute(`data-${keys[j]}`)
			}
		}
	}

	return this;
}

$.prototype.toggleAttr = function(nameAttr, valueAttr = '') {
	for (let i = 0; i < this.length; i++) {
		if (!nameAttr) {
			return this;
		} else if (this[i].dataset[nameAttr]) {
			this[i].removeAttribute(`data-${nameAttr}`);
		} else if (!this[i].dataset[nameAttr] && !valueAttr) {
			console.error('[Error]: set the attribute value')
		} else {
			this[i].setAttribute(`data-${nameAttr}`, valueAttr);
		} 
	}
} 