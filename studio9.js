function d_filter(pred, xs) {
    if (is_null(xs)) {
        return null;
    } else {
        const filtered_tail = d_filter(pred, tail(xs));
        
        if (pred(head(xs))) {
            set_tail(xs, filtered_tail);
            return xs;
        } else {
            return filtered_tail;
        }
    }
}

const L= list(1, 2, 3);
d_filter(x => x % 2 === 0, L);
L;


function count_pairs(xs) {
    let seen = null;
    
    function count(ys) {
        if(is_pair(ys)) {
            if (!member(ys, seen)) {
                seen = pair(ys, seen);
                count(head(ys));
                count(tail(ys));
            }
        }
    }
    count(xs)
    return length(seen);
}