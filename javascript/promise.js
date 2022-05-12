/*
* 原地址：https://www.html.cn/interview/20698.html
*/
const PENDING = 1;
const FULFILLED = 2;
const REJECTED = 3;

function MyPromise(executor) {
    let self = this;
    this.resolveQueue = [];
    this.rejectQueue = [];
    this.state = PENDING;
    this.val = undefined;
    function resolve(val) {
        if (self.state === PENDING) {
            setTimeout(() => {
                self.state = FULFILLED;
                self.val = val;
                self.resolveQueue.forEach(cb => cb(val));
            });
        }
    }
    function reject(err) {
        if (self.state === PENDING) {
            setTimeout(() => {
                self.state = REJECTED;
                self.val = err;
                self.rejectQueue.forEach(cb => cb(err));
            });
        }
    }
    try {
        // 回调是异步执行, 函数是同步执行
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

MyPromise.prototype.then = function (onResolve, onReject) {
    let self = this;
    // 不传值的话默认是一个返回原值的函数
    onResolve = typeof onResolve === 'function' ? onResolve : (v => v);
    onReject = typeof onReject === 'function' ? onReject : (e => { throw e });

    if (self.state === FULFILLED) {
        return new MyPromise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onResolve(self.val);
                    if (x instanceof MyPromise) {
                        x.then(resolve);
                    } else {
                        resolve(x);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

    if (self.state === REJECTED) {
        return new MyPromise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onReject(self.val);
                    if (x instanceof MyPromise) {
                        x.then(resolve);
                    } else {
                        resolve(x);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

    if (self.state === PENDING) {
        return new MyPromise(function (resolve, reject) {
            self.resolveQueue.push((val) => {
                try {
                    let x = onResolve(val);
                    if (x instanceof MyPromise) {
                        x.then(resolve);
                    } else {
                        resolve(x);
                    }
                } catch (e) {
                    reject(e);
                }
            });
            self.rejectQueue.push((val) => {
                try {
                    let x = onReject(val);
                    if (x instanceof MyPromise) {
                        x.then(resolve);
                    } else {
                        resolve(x);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}

MyPromise.prototype.catch = function (onReject) {
    return this.then(null, onReject);
}

MyPromise.all = function (promises) {
    return new MyPromise(function (resolve, reject) {
        let count = 0;
        let result = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(
                res => {
                    result[i] = res;
                    if (++count === promises.length) {
                        resolve(result);
                    }
                },
                err => {
                    reject(err);
                }
            )
        }
    });
}

MyPromise.race = function (promises) {
    return new MyPromise(function (resolve, reject) {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    });
}

MyPromise.resolve = function (val) {
    return new MyPromise(function (resolve, reject) {
        resolve(val);
    });
}

MyPromise.reject = function (err) {
    return new MyPromise(function (resolve, reject) {
        reject(err);
    })
}

// resolve:
// var p = new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('执行完成')
//         resolve(1)
//     }, 1000)
// })

// p.then((val) => {
//     return new MyPromise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('获取数据:', val)
//             resolve(++val)
//         }, 1000)
//     })
// }).then((val) => {
//     setTimeout(function () {
//         console.log('获取数据:', val)
//     }, 1000)
// })

// reject:
var p = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        console.log('执行完成')
        resolve(1)
        // reject(1)
    }, 1000)
})

p.then(
    (val) => {
        return new MyPromise(function (resolve, reject) {
            setTimeout(function () {
                console.log('resolved:', val)
                // resolve(++val)
                reject(++val)
            }, 1000)
        })
    },
    (err) => {
        setTimeout(function () {
            console.log('rejected:', err)
        }, 1000)
    }
).catch((err) => {
    console.log('catch:', err)
})

// all:
// var p1 = new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('p1...')
//         resolve(1)
//     }, 1000)
// })

// var p2 = new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('p2...')
//         resolve(2)
//     }, 500)
// })

// var p3 = new MyPromise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('p3...')
//         resolve(3)
//     }, 750)
// })

// MyPromise.all([p1, p2, p3]).then(val => {
//     console.log('finish:', val)
// })