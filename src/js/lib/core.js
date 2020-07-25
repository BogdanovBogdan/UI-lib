const $ = function(selector) {
	return new $.prototype.init(selector)
}

$.prototype.init = function(selector) {
	if (!selector) {
		return this;
	}

	if (selector.tagName) {
		this[0] = selector;
		this.length = 1;
		return this;
	}

	const el = document.querySelectorAll(selector)
	
	if (!el.length) {
		console.error(`Elements with class ${selector} were not found`);
		return;
	}

	Object.assign(this, el)
	this.length = el.length;
	return this;
}

$.prototype.init.prototype = $.prototype

window.$ = $

export default $;