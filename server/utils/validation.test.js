var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should validate name and room are present and are strings', () => {
		var res = isRealString('   Sammy   ');
		expect(res).toBe(true);
	}); 

	it('should reject non string values', () => {
		var res = isRealString(98);
		expect(res).toBe(false);
	});

	it('should reject string with only spaces', () => {
		var res = isRealString('    ');
		expect(res).toBe(false);
	});

})