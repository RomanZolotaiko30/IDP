const worker = new Worker('factorial-worker.js', { type: "module" });

worker.onmessage = event => {
    alert(event.data);
}

function calculateFactorial(number) {
    worker.postMessage(number);
}