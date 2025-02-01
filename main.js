const Pool = require('worker-thread-pool');

const pool = new Pool({
    path: __dirname + '/worker.js',
    size: 150,
    maxQueueSize: 1000,
});

for (let i = 0; i <= 1000; i++) {

    const name = i.toString();

    pool.run({ name })
        .then((result) => {
            console.info(result);
        })
        .catch((err) => {
            console.log('err', err);
        });
}
