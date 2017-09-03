const expect = require('expect');
var {isRealString} = require('./validation.js');

describe('validation.js', () => {
    describe('isRealString', () => {
        it('should reject non-string values', () => {
            var input = 1234;
            expect(isRealString(input)).toBe(false);
        });

        it('should reject strings with only spaces', () => {
            var input = '      ';
            expect(isRealString(input)).toBe(false);
        });

        it('should allow strings with non space characters', () => {
            var input = '   Manav is the Best   ';
            expect(isRealString(input)).toBe(true);
        });
    });
});