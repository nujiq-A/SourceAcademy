function make_opt_search(A) {
    const len = array_length(A);
    const B = [];
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    merge_sort(B);
    return x => binary_search(B, x);
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        let a = 0;
        let b = 1;
        
        for (let i = 2; i <= n; i = i + 1) {
            const c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        let a = 0;
        let b = 1;
        
        for (let i = 2; i <= n; i = i + 1) {
            const c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

runnning time: tetha(k(n - k))
                big-o(nk)
space: tetha(k(n - k));