const Stack = require('../stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('should empty when instance created', () => {
        expect(stack.size()).toBe(0);
    });

    it('allow to push item', () => {
        stack.push({item: 'apple'});
        expect(stack.size()).toBe(1);
        expect(stack.get(0)).toEqual({item: 'apple'});
    });

    describe('pop', () => {
        it('throw an error if stack is empty', () => {
            expect(() => {
                stack.pop();
            }).toThrow('Stack is empty');
        });

        it('returns the last pushed item and remove the item', () => {
            stack.push({item: 'apple'});
            stack.push({item: 'banana'});
            expect(stack.pop()).toEqual({item: 'banana'});
            expect(stack.size()).toBe(1);
            expect(stack.pop()).toEqual({item: 'apple'});
            expect(stack.size()).toBe(0);
        });
    });

    describe('get', () => {
        it('get item when array size = 0', () => {
            expect(() => {
                stack.pop();
            }).toThrow('Stack is empty');
        });

        it('returns the last pushed item', () => {
            stack.push({item: 'apple'});
            stack.push({item: 'banana'});
            expect(stack.get()).toEqual({item: 'banana'});
            expect(stack.size()).toBe(2);
        });
    })
});