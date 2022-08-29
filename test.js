setTimeout(() => {
    console.log("1-1");
    Promise.resolve().then(() => {
        console.log("1-2");
    });
});

Promise.resolve().then(() => {
    console.log("3-1");
    setTimeout(() => {
        console.log("3-2");
    });
}).then(function () {
    console.log('3-3');
}).then(function () {
    console.log('3-4');
});