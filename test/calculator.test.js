const assert = require('assert');
const calculator = require('../app/calculator');

describe('Calculator Tests', function () {
	// Add Cases
	it('should add two numbers successfully', function () {
		const result = calculator.add(5, 2);
		assert.strictEqual(result, 7, 'Addition failed');
	});

	it('should fail to add two numbers', function () {
		const result = calculator.add(5, 2);
		assert.notStrictEqual(result, 8, 'Addition should fail');
	});

	// Subtract Cases
	it('should subtract two numbers successfully', function () {
		const result = calculator.sub(5, 2);
		assert.strictEqual(result, 3, 'Subtraction failed');
	});

	it('should fail to subtract two numbers', function () {
		const result = calculator.sub(5, 2);
		assert.notStrictEqual(result, 5, 'Subtraction should fail');
	});

	// Multiply Cases
	it('should multiply two numbers successfully', function () {
		const result = calculator.mul(5, 2);
		assert.strictEqual(result, 10, 'Multiplication failed');
	});

	it('should fail to multiply two numbers', function () {
		const result = calculator.mul(5, 2);
		assert.notStrictEqual(result, 12, 'Multiplication should fail');
	});

	// Divide Cases
	it('should divide two numbers successfully', function () {
		const result = calculator.div(10, 2);
		assert.strictEqual(result, 5, 'Division failed');
	});

	it('should fail to divide two numbers', function () {
		const result = calculator.div(10, 2);
		assert.notStrictEqual(result, 2, 'Division should fail');
	});

	// Additional Test Cases
	// Add
	it('should add two other numbers successfully', function () {
		const result = calculator.add(8, 3);
		assert.strictEqual(result, 11, 'Addition failed');
	});

	it('should fail to add two other numbers', function () {
		const result = calculator.add(8, 3);
		assert.notStrictEqual(result, 10, 'Addition should fail');
	});

	// Subtract
	it('should subtract two other numbers successfully', function () {
		const result = calculator.sub(8, 3);
		assert.strictEqual(result, 5, 'Subtraction failed');
	});

	it('should fail to subtract two other numbers', function () {
		const result = calculator.sub(8, 3);
		assert.notStrictEqual(result, 3, 'Subtraction should fail');
	});

	// Multiply
	it('should multiply two other numbers successfully', function () {
		const result = calculator.mul(8, 3);
		assert.strictEqual(result, 24, 'Multiplication failed');
	});

	it('should fail to multiply two other numbers', function () {
		const result = calculator.mul(8, 3);
		assert.notStrictEqual(result, 20, 'Multiplication should fail');
	});

	// Divide
	it('should divide two other numbers successfully', function () {
		const result = calculator.div(15, 3);
		assert.strictEqual(result, 5, 'Division failed');
	});

	it('should fail to divide two other numbers', function () {
		const result = calculator.div(15, 3);
		assert.notStrictEqual(result, 4, 'Division should fail');
	});
});
