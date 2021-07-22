

function receivesAFunction(callback) {
   callback();
}

function returnsANamedFunction () {
    return function x() {
        console.log('goodbye world') 
    }
}

function returnsAnAnonymousFunction () {
    return () => console.log('hello world')
} 