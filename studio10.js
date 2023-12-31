function bubblesort_list(L) {
    let l = L;
    const len = length(L);
    for (let i = 0; i < len - 1; i = i + 1) {
        for (let j = 0; j < len - i - 1; j = j + 1) {
            swapper(L);
            L = tail(L);
        }
        L = l;
    }
    return l;
}

function swapper(L) {
    if (head(tail(L)) < head(L)) {
        const temp = head(L);
        set_head(L, head(tail(L)));
        set_head(tail(L), temp);
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL;

const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (n === 0) {
        return 1;
    } else if (n < 0 || k === 0) {
        return 0;
    } else if (read(n, k) === undefined) {
        const val = mcc(n, k - 1) + mcc(n - first_denomination(k), k);
        write(n, k, val);
        return read(n, k);
    } else {
        return read(n, k);
    }
    
}

// mcc(365, 5);  // Expected result: 1730

function rotate_matrix(M) {
    let len = array_length(M);
    
    for (let j = 0; j < len; j = j + 1) {
        for(let i = j + 1; i < len; i = i + 1) {
            if (j !== i) {
                const temp = M[i][j];
                M[i][j] = M[j][i];
                M[j][i] = temp;
            }
        }
    }
    for (let i = 0; i < len; i = i + 1) {
        for (let j = 0; j < math_floor(len / 2); j = j + 1) {
            const temp = M[i][j];
            M[i][j] = M[i][len - j - 1];
            M[i][len - j - 1] = temp;
        }
    }
    return M;
}


const G = [[1,2,3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]];

rotate_matrix(G);

































