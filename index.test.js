const main = require('./index');

test('runs main', async () => {
    expect(await main()).toBe(undefined)
});