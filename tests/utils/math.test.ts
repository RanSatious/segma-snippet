//@ts-nocheck
import { sum, sumBy } from '../../dist/index';

describe('[sum]', () => {
    test('passing non array value will return 0', () => {
        expect(sum()).toBe(0);
        expect(sum('a')).toBe(0);
        expect(sum({})).toBe(0);
        expect(sum(null)).toBe(0);
    });

    test('passing empty array will return 0', () => {
        expect(sum([])).toBe(0);
    });

    test('ignore values which is not a number', () => {
        expect(sum([1, 2, 'a'])).toBe(3);
        expect(sum(['a'])).toBe(0);
    });

    test('return correct sum result', () => {
        expect(sum([1])).toBe(1);
        expect(sum([1, 2, 3])).toBe(6);
    });
});

describe('[sumBy]', () => {
    test('passing non array value will return 0', () => {
        expect(sumBy()).toBe(0);
        expect(sumBy('a')).toBe(0);
        expect(sumBy({})).toBe(0);
        expect(sumBy(null)).toBe(0);
    });

    test('passing empty array will return 0', () => {
        expect(sumBy([], d => d)).toBe(0);
    });

    test('ignore values which is not a number', () => {
        expect(sumBy([1, 2, 'a'], d => d)).toBe(3);
        expect(sumBy(['a'], d => d)).toBe(0);
    });

    test('return correct sum result', () => {
        expect(sumBy([1], d => d)).toBe(1);
        expect(sumBy([1, 2, 3], d => d * 2)).toBe(12);
    });
});
