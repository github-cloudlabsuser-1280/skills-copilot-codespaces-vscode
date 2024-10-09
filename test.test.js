const assert = require('assert');
const calculate = require('./test').calculate;

describe('calculate', function() {
    it('should return 5 for 2 + 3', function() {
        assert.strictEqual(calculate(2, 3, '+'), 5);
    });

    it('should return -1 for 2 - 3', function() {
        assert.strictEqual(calculate(2, 3, '-'), -1);
    });

    it('should return 6 for 2 * 3', function() {
        assert.strictEqual(calculate(2, 3, '*'), 6);
    });

    it('should return 2 for 6 / 3', function() {
        assert.strictEqual(calculate(6, 3, '/'), 2);
    });

    it('should return "Invalid operator" for 2 % 3', function() {
        assert.strictEqual(calculate(2, 3, '%'), 'Invalid operator');
    });

    it('should return "Invalid operator" for invalid operator', function() {
        assert.strictEqual(calculate(2, 3, 'invalid'), 'Invalid operator');
    });
});