import { sleep, isNil, distinct } from '../../dist/utils/index';

describe('[isNil]', () => {
    test('return true when passing null', () => {
        expect(isNil(null)).toBe(true);
    });

    test('return true when passing undefined', () => {
        expect(isNil(undefined)).toBe(true);
    });

    test('return false when passing other values', () => {
        expect(isNil(0)).toBe(false);
        expect(isNil(NaN)).toBe(false);
        expect(isNil('')).toBe(false);
        expect(isNil({})).toBe(false);
    });
});

describe('[sleep]', () => {
    test('waiting time >= interval', async () => {
        let start = Date.now();
        let interval = 1000;
        await sleep(interval);
        expect(Date.now() - start >= 1000).toBe(true);

        interval = 0;
        start = Date.now();
        await sleep(interval);
        expect(Date.now() - start >= 0).toBe(true);
    });
});

describe('[distinct]', () => {
    test('return array', () => {
        expect(Array.isArray(distinct([]))).toBe(true);
    });

    test('distinct empty array', () => {
        let arr = distinct([]);
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toBe(0);
    });

    test('distinct array', () => {
        expect(distinct([1, 2, 3, 1]).join()).toBe('1,2,3');
        expect(distinct(['a', 'a', 1, 1]).join()).toBe('a,1');
    });

    test('distinct array with selector', () => {
        let arr = distinct(
            [
                { name: 'a', value: 1 },
                { name: 'b', value: 2 },
                { name: 'a', value: 3 },
            ],
            d => d.name
        );
        expect(arr.length).toBe(2);
        expect(arr[0].name).toBe('a');
        expect(arr[1].name).toBe('b');
    });
});
