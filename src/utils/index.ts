/**
 * 复制文本到剪贴板
 *
 * @param {string} content
 * @returns {boolean}
 */
function copyText(content: string): boolean {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', content);
    input.select();
    let result = document.execCommand('copy', false);
    document.body.removeChild(input);
    return result;
}

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

/**
 * id 生成器
 *
 * @export
 * @param {number} [len=10]
 * @returns {string}
 */
function uid(len: number = 10): string {
    let str = '';
    const HEX = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210';
    while (len--) {
        str += HEX[(Math.random() * HEX.length) | 0];
    }
    return str;
}

export { copyText, distinct, isNil, sleep, uid };
