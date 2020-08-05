//@ts-nocheck
import { formatSize, formatTimeSpan } from '../../dist';

describe('[formatSize]', () => {
    test('return empty result correctly', () => {
        expect(formatSize(null)).toBe('--');
        expect(formatSize()).toBe('--');
        expect(formatSize('a')).toBe('--');
    });

    test('return custom empty result correctly', () => {
        expect(formatSize(null, { empty: 'empty' })).toBe('empty');
        expect(formatSize(undefined, { empty: 'empty' })).toBe('empty');
        expect(formatSize('a', { empty: 'empty' })).toBe('empty');
    });

    test('return zero result correctly', () => {
        expect(formatSize(0)).toBe('0B');
        expect(formatSize(0, { zero: '0' })).toBe('0');
    });

    test('format size correctly', () => {
        expect(formatSize(0)).toBe('0B');
        expect(formatSize(100)).toBe('100.00B');
        expect(formatSize(1024)).toBe('1.00KB');
        expect(formatSize(1024 + 444)).toBe('1.43KB');
        expect(formatSize(Math.pow(1024, 2))).toBe('1.00MB');
        expect(formatSize(Math.pow(1024, 3))).toBe('1.00GB');
        expect(formatSize(Math.pow(1024, 4))).toBe('1.00TB');
        expect(formatSize(Math.pow(1024, 5))).toBe('1.00PB');
        expect(formatSize(Math.pow(1024, 6))).toBe('1024.00PB');
    });

    test('format negative size correctly', () => {
        expect(formatSize(-1024)).toBe('-1.00KB');
        expect(formatSize(-Math.pow(1024, 6))).toBe('-1024.00PB');
    });

    test('format digit correctly', () => {
        expect(formatSize(100, { digit: 0 })).toBe('100B');
        expect(formatSize(100.23, { digit: 1 })).toBe('100.2B');
        expect(formatSize(100.23, { digit: 3 })).toBe('100.230B');
    });

    test('format unit correctly', () => {
        const units = ['b', 'kb', 'mb'];
        expect(formatSize(100, { units })).toBe('100.00b');
        expect(formatSize(1024, { units })).toBe('1.00kb');
        expect(formatSize(Math.pow(1024, 2), { units })).toBe('1.00mb');
        expect(formatSize(Math.pow(1024, 3), { units })).toBe('1024.00mb');
    });
});

describe('[formatTimeSpan]', () => {
    test('format 0', () => {
        expect(formatTimeSpan(0)).toBe('');
    });

    test('format timespan', () => {
        expect(formatTimeSpan(28)).toBe('28ms');
        expect(formatTimeSpan(1028)).toBe('1s28ms');
        expect(formatTimeSpan(1000 * 60)).toBe('1m');
        expect(formatTimeSpan(1000 * 60 + 100)).toBe('1m0s100ms');
        expect(formatTimeSpan(1000 * 70 + 100)).toBe('1m10s100ms');
        expect(formatTimeSpan(1000 * 60 * 60)).toBe('1h');
        expect(formatTimeSpan(1000 * 60 * 70)).toBe('1h10m');
        expect(formatTimeSpan(1000 * 60 * 70 + 1000 * 12)).toBe('1h10m12s');
        expect(formatTimeSpan(1000 * 60 * 70 + 1000 * 12 + 344)).toBe('1h10m12s344ms');
        expect(formatTimeSpan(1000 * 60 * 60 + 344)).toBe('1h0m0s344ms');
        expect(formatTimeSpan(1000 * 60 * 60 * 24)).toBe('1d');
        expect(formatTimeSpan(1000 * 60 * 60 * 28)).toBe('1d4h');
        expect(formatTimeSpan(1000 * 60 * 60 * 28 + 1000 * 60 * 12)).toBe('1d4h12m');
        expect(formatTimeSpan(1000 * 60 * 60 * 28 + 1000 * 60 * 12 + 1000 * 34)).toBe('1d4h12m34s');
        expect(formatTimeSpan(1000 * 60 * 60 * 28 + 1000 * 60 * 12 + 1000 * 34 + 650)).toBe('1d4h12m34s650ms');
        expect(formatTimeSpan(1000 * 60 * 60 * 24 + 550)).toBe('1d0h0m0s550ms');
        expect(formatTimeSpan(1000 * 60 * 60 * 24 * 100)).toBe('100d');
    });

    test('format negative timespan', () => {
        expect(formatTimeSpan(-(1000 * 70 + 100))).toBe('-1m10s100ms');
        expect(formatTimeSpan(-(1000 * 60 * 60 * 28 + 1000 * 60 * 12 + 1000 * 34 + 650))).toBe('-1d4h12m34s650ms');
    });

    test('format float number', () => {
        expect(formatTimeSpan(1024.35)).toBe('1s24ms');
        expect(formatTimeSpan(1024.75)).toBe('1s25ms');
        expect(formatTimeSpan(-1024.75)).toBe('-1s25ms');
        expect(formatTimeSpan(-1024.15)).toBe('-1s24ms');
    });

    test('format NaN', () => {
        expect(formatTimeSpan('a')).toBe('');
        expect(formatTimeSpan({})).toBe('');
    });
});
