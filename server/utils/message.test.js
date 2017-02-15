var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'Jen';
		var text = "some Message";
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from ='Admin';
		var latitude = 10;
		var longitude = 15;
		var message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA('number');
		expect(message.url).toBe('https://www.google.com/maps?q=10,15')
	});
})