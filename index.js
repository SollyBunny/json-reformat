const replaceregex = /<[^>]+>/;
const replacematch = /[^<][^>]+/;

function isobj(x) {
	return (
		typeof x === "object" &&
	    !Array.isArray(x) &&
	    x !== null
	);
}

function reformatunsafe(format, data) {
	Object.keys(format).forEach(key => {
		if (!replaceregex.test(key)) return;
		let newkey = key.match(replacematch)[0];
		if (!data.hasOwnProperty(newkey)) return;
		Object.defineProperty(
			format,
			data[newkey],
			Object.getOwnPropertyDescriptor(format, key)
		);
		delete format[key];
	});
	Object.keys(format).forEach(key => {
		if (isobj(format[key])) {
			reformatunsafe(format[key], data);
			return;
		}
		if (Object.prototype.toString.call(format[key]) !== "[object String]") return;
		if (!replaceregex.test(format[key])) return;
		format[key] = data[format[key].match(replacematch)[0]];
	});
	return format;
}

module.exports = function reformat(format, data) {
	if (!isobj(format)) {
		throw("format must be an object");
		return;
	}
	if (!isobj(data)) {
		throw("format must be an object");
		return;
	}
	return reformatunsafe(format, data);
};

module.exports.unsafe = reformatunsafe;
