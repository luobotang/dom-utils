function getElementPath(element) {
	var path = []
	var el = element
	while (el) {
		path.unshift(elementToSelector(el))
		if (el !== document.documentElement) {
			el = el.parentElement
		} else {
			break
		}
	}
	return path
}

function elementToSelector(element) {
	var selector = ''
	var tag = element.tagName.toLowerCase()
	selector += tag
	var id = element.id
	if (id) {
		selector += '#' + id
	}
	var className = classNameToSelector(element.className)
	selector += className
	if (tag === 'input' || tag === 'button') {
		var type = element.getAttribute('type')
		if (type) {
			selector += '[type=' + type + ']'
		}
		var name = element.getAttribute('name')
		if (name) {
			selector += '[name=' + name + ']'
		}
	}
	return selector
}

function classNameToSelector(className) {
	var parts = className.split(' ').sort()
	var ret = []
	for (var i = 0, len = parts.length; i < len; i++) {
		if (parts[i]) {
			ret.push('.' + parts[i])
		}
	}
	return ret.join('')
}