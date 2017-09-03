var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('message.js', () => {
    describe('generateMessage', () => {
        it('should generate the correct message object', () => {
            var from = 'Manav Bokinala';
            var text = 'This is texting message';
            var message = generateMessage(from, text);

            expect(message.createdAt).toBeA('number');
            expect(message).toInclude({from, text});

        });
    });

    describe('generateLocationMessage', () => {
        it('should generate correct location object', () => {
            var from = 'Abinav';
            var latitude = 0;
            var longitude = 0;
            var message = generateLocationMessage(from, latitude, longitude);

            expect(message.createdAt).toBeA('number');
            expect(message).toInclude({
                from,
                url: `https://www.google.com/maps?q=${latitude},${longitude}`
            });
        });
    });
});