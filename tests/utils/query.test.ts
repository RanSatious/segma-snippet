//@ts-nocheck
import { filterQuery, isNil } from '../../dist/index';

describe('[filterQuery]', () => {
    test('falsy value or non object value will return {}', () => {
        expect(JSON.stringify(filterQuery(null))).toBe('{}');
        expect(JSON.stringify(filterQuery())).toBe('{}');
        expect(JSON.stringify(filterQuery(1))).toBe('{}');
        expect(JSON.stringify(filterQuery(false))).toBe('{}');
        expect(JSON.stringify(filterQuery('123'))).toBe('{}');
    });

    test('always return a new object', () => {
        let obj = { a: 1 };
        expect(filterQuery(obj) === obj).toBe(false);
    });

    test('default filter', () => {
        let obj = filterQuery({ a: 1, b: null, c: undefined, d: 0, e: '' });
        expect(Object.keys(obj).join()).toBe('a');
        expect(obj.a).toBe(1);
    });

    test('custom filter', () => {
        let obj = filterQuery({ a: 1, b: null, c: undefined, d: 0, e: '' }, (value, key) => {
            return !isNil(value) && key !== 'e';
        });
        expect(Object.keys(obj).join()).toBe('a,d');
        expect(obj.a).toBe(1);
        expect(obj.d).toBe(0);
    });
});
