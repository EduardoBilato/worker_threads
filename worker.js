const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {

    console.log('hello ' + message.name);

    const time = getRandomTime();

    setTimeout(() => {
        message.port.postMessage({ message: message.name, waitTime: time , done: 'ok' });
        message.port.close();
    }, time);

});

function getRandomTime() {
    const fator = Math.floor(Math.random() * 5) + 1;
    return fator * 500;
}