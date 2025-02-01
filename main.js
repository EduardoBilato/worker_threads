const Pool = require('worker-thread-pool');

const pool = new Pool({
    path: __dirname + '/worker.js',
    size: 5,
    maxQueueSize: 50,
});

for (let i = 0; i < 100; i++) {

    const name = i.toString();

    pool.run({ name })
        .then((result) => {
            console.log('result', result);
        })
        .catch((err) => {
            console.log('err', err);
        });
}
