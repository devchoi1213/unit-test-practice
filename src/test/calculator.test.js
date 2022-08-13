const Calculator = require("../calculator.js");
let calculator;
beforeEach(() => calculator = new Calculator());

test('calculator constructor', () => {
    expect(calculator.value).toBe(0);
})

test('calculator set', () => {
    calculator.set(10);
    expect(calculator.value).toBe(10);
})

test('calculator clear', () => {
    calculator.set(10);
    calculator.clear();
    expect(calculator.value).toBe(0);
})

test('calculator add', () => {
    calculator.add(100);
    expect(calculator.value).toBe(100);
    calculator.clear();

    expect(() => calculator.add(101)).toThrow('Value can not be greater than 100');
})

test('calculator subtract', () => {
    calculator.subtract(100);
    expect(calculator.value).toBe(-100);
})

test('calculator multiply', () => {
    calculator.set(10);
    calculator.multiply(10);
    expect(calculator.value).toBe(100);
})

test('calculator divide', () => {
    calculator.set(10);
    calculator.divide(10);
    expect(calculator.value).toBe(1);
})