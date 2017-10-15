class MathUtil {

		// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
	static hash(N=10) {
		return Array(N+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, N);
	}

	static filterFloat(value) {
	    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
			return Number(value);

		}
		return NaN;
	}

	static isValidLatOrLong(value) {
		let floatValue = this.filterFloat(value);
		if (floatValue == NaN) return false;
		return (floatValue > -90.0) && (floatValue < 90.0);
	}

	static isPositiveInteger(str) {
	    var n = Math.floor(Number(str));
	    return String(n) == str && n >= 0;
	}

	// cf: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	/**
	 * Returns a random integer between min (inclusive) and max (inclusive)
	 * Using Math.round() will give you a non-uniform distribution!
	 */
	static randomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

module.exports = MathUtil;
