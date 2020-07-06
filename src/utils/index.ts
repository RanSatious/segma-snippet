/**
 * 等待一段时间
 *
 * @param {number} interval
 * @returns {Promise<void>}
 */
function sleep(interval: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}

export { sleep };
