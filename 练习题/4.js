window.whenReady = (function () {
    let ready = false
    let funcs = []

    function handler (e) {
        if (ready) {
            return
        }

        if (e.type === 'onreadystatechange' && document.readyState !== 'complete') {
            return
        }

        for (let i = 0; i < funcs.length; i++) {
            funcs[i].call(document)
        }

        ready = true
        funcs = []
    }

    if (window.addEventListener) {
        document.addEventListener('DOMContentLoaded', handler, false)
        window.addEventListener('load', handler, false)
    }
    else {
        document.attachEvent('onreadystatechange', handler)
    }

    return function whenReady (fn) {
        if (ready) {
            fn.call(document)
        }
        else {
            funcs.push(fn)
        }
    }
})();