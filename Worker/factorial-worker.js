import calculateFactorial from "./factorial-helper";

onmessage = event => {
    var result = calculateFactorial(event.data);

    postMessage(result);
}