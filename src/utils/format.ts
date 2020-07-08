import { isNil } from '.';

interface ISizeOption {
    units?: Array<string>;
    empty?: string;
    zero?: string;
    digit?: number;
}

/**
 * 尺寸大小格式化
 *
 * @param {number} value
 * @param {Array<string>} units
 */
function formatSize(size: number, option?: ISizeOption): string {
    const sizeOption = Object.assign(
        {
            units: ['B', 'KB', 'MB', 'GB', 'TB', 'PB'],
            empty: '--',
            zero: '0B',
            digit: 2,
        },
        option
    );

    let { empty, zero, units, digit } = sizeOption;
    if (isNil(size) || isNaN(size)) {
        return empty;
    }
    if (size === 0) {
        return zero;
    }

    let isNegative = size < 0;
    size = Math.abs(size);

    let index = Math.min(Math.floor(Math.log2(size) / Math.log2(1024)), units.length - 1);
    size = size / Math.pow(1024, index);
    return `${isNegative ? '-' : ''}${size.toFixed(digit)}${units[index]}`;
}

/**
 * 格式化时间差
 *
 * @param {number} span
 * @param {boolean} [keepMilliseconds=false]
 * @returns
 */
function formatTimeSpan(span: number) {
    if (isNaN(span)) {
        return '';
    }

    let isNegative = span < 0;
    span = Math.abs(Math.round(span));

    let names = ['ms', 's', 'm', 'h', 'd'];
    let units = [1000, 60, 60, 24, Number.MAX_SAFE_INTEGER];
    let list = [];
    let index = 0;

    while (span > 0 && index < names.length) {
        list.push({
            name: names[index],
            value: span % units[index],
        });
        span = Math.floor(span / units[index]);
        index++;
    }

    let result = '';
    let trim = true;
    for (let i = 0; i < list.length; i++) {
        let { value, name } = list[i];
        if (value === 0 && trim) {
            continue;
        }
        trim = false;
        result = value + name + result;
    }

    return isNegative ? '-' + result : result;
}

export { formatSize, formatTimeSpan };
