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