/**
 * 根据条件过滤对象
 *
 * @param {*} query
 * @param {(value: any) => boolean} [filter=d => !!d]
 * @returns
 */
function filterQuery(query: any, filter: (value: any, key: string) => boolean = d => !!d) {
    if (!query || typeof query !== 'object') {
        return {};
    }
    return Object.keys(query).reduce((total: any, key) => {
        if (filter(query[key], key)) {
            total[key] = query[key];
        }
        return total;
    }, {});
}

export { filterQuery };
