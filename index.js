function isobj(x) {
	return (
		typeof x === "object" &&
	    !Array.isArray(x) &&
	    x !== null
	);
}

function main(format, data) {
	console.log(format, data);
}

module.exports = function(format, data) {
	if (!isobj(format)) {
		throw("format must be an object");
		return;
	}
	if (!isobj(data)) {
		throw("format must be an object");
		return;
	}
	main(format, data);
};

module.exports.unsafe = main;
