/**
 * 数组去重
 *
 * @template T
 * @param {Array<T>} arr
 * @param {(d: T) => unknown} [selector]
 * @returns {Array<T>}
 */
function distinct<T>(arr: Array<T>, selector?: (d: T) => unknown): Array<T> {
    return [...new Map(selector ? arr.flatMap(d => [[selector(d), d]]) : arr.flatMap(d => [[d, d]])).values()];
}

/**
 * 判断一个变量是否为 null 或 undefined
 *
 * @param {*} value
 * @returns
 */
function isNil(value: any): boolean {
    return value === null || typeof value === 'undefined';
}

/**
 * 等待一段时间
 *
 * @param {number} interval
 * @returns {Promise<void>}
 */
function sleep(interval: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, interval);
    });
}

export { distinct, isNil, sleep };
