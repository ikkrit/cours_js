const { test, expect } = require('@jest/globals');
const addNumber = require('./add');

test("Additionne 2 nombres", () => {
    expect(addNumber(1, 2)).toBe(3);
    expect(addNumber(2, -4)).toBe(-2);
});