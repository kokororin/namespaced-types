function namespacedTypes(namespace, constants, divider = '/') {
	return Object.freeze(
		constants.reduce((obj, constant) => {
			return {
				...obj,
				[constant]: `${namespace}${divider}${constant}`
			};
		}, {})
	);
}

module.exports = namespacedTypes;
