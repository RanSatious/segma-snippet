import { sleep } from '../../dist/utils/index';

test('sleep works', async () => {
    let start = Date.now();
    let interval = 1000;
    await sleep(interval);
    expect(Date.now() - start >= 1000).toBe(true);
});
