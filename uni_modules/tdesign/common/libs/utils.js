export function addUnit(value) {
	var REGEXP = /^-?\d+(.\d+)?$/ //getRegExp('^-?\d+(.\d+)?$');
	if (value == null) {
		return undefined;
	}
	return REGEXP.test('' + value) ? value + 'px' : value;
}


export function isString(string) {
	return string && string.constructor === 'String';
}

export function isArray(array) {
	return array && array.constructor === 'Array';
}

export function isObject(obj) {
	return obj && obj.constructor === 'Object';
}

var isNoEmptyObj = function(obj) {
	return isObject(obj) && JSON.stringify(obj) !== '{}';
};

export function includes(arr, value) {
	if (!arr || !isArray(arr)) return false;

	var i = 0;
	var len = arr.length;

	for (; i < len; i++) {
		if (arr[i] === value) return true;
	}
	return false;
}

export function cls(base, arr) {
	var res = [base];
	var i = 0;
	for (let size = arr.length; i < size; i++) {
		var item = arr[i];

		if (item && item.constructor === 'Array') {
			var key = arr[i][0];
			var value = arr[i][1];

			if (value) {
				res.push(base + '--' + key);
			}
		} else if (typeof item === 'string' || typeof item === 'number') {
			if (item) {
				res.push(base + '--' + item);
			}
		}
	}
	return res.join(' ');
}

export function getBadgeAriaLabel(options) {
	var maxCount = options.maxCount || 99;
	if (options.dot) {
		return '有新的消息';
	}
	if (options.count === '...') {
		return '有很多消息';
	}
	if (isNaN(options.count)) {
		return options.count;
	}
	var str1 = '有' + maxCount + '+条消息';
	var str2 = '有' + options.count + '条消息';
	return Number(options.count) > maxCount ? str1 : str2;
}

export function endsWith(str, endStr) {
	return str.slice(-endStr.length) === endStr ? str : str + endStr;
}

export function keys(obj) {
	return JSON.stringify(obj)
		.replace(getRegExp('{|}|"', 'g'), '')
		.split(',')
		.map(function(item) {
			return item.split(':')[0];
		});
}

export function kebabCase(str) {
	return str
		.replace(getRegExp('[A-Z]', 'g'), function(ele) {
			return '-' + ele;
		})
		.toLowerCase();
}

export function _style(styles) {
	if (isArray(styles)) {
		return styles
			.filter(function(item) {
				return item != null && item !== '';
			})
			.map(function(item) {
				return isArray(item) ? style(item) : endsWith(item, ';');
			})
			.join(' ');
	}

	if (isObject(styles)) {
		return keys(styles)
			.filter(function(key) {
				return styles[key] != null && styles[key] !== '';
			})
			.map(function(key) {
				return [kebabCase(key), [styles[key]]].join(':');
			})
			.join(';');
	}

	return styles;
}

export function camelCase(str) {
	let s = str && str.match('/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g').map(x => x.slice(0,
		1).toUpperCase() + x.slice(1).toLowerCase()).join('');
	return s.slice(0, 1).toLowerCase() + s.slice(1);
};

export function merge(obj = {}, defaults) {
	for (const key in defaults) {
		if (typeof obj[key] === 'undefined') {
			obj[key] = defaults[key];
		}
	}
	return obj;
}