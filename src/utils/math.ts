/**
 * 计算数组之和
 *
 * @param {number[]} values
 * @returns {number}
 */
function sum(values: number[]): number {
    if (!Array.isArray(values)) {
        return 0;
    }
    return values.filter(d => !isNaN(d)).reduce((a, b) => a + b, 0);
}

/**
 * 计算数组指定元素之和
 *
 * @template T
 * @param {T[]} values
 * @param {(item: T) => number} selector
 * @returns {number}
 */
function sumBy<T>(values: T[], selector: (item: T) => number): number {
    if (!Array.isArray(values)) {
        return 0;
    }
    return values
        .map(selector)
        .filter(d => !isNaN(d))
        .reduce((a, b) => a + b, 0);
}

export { sum, sumBy };
