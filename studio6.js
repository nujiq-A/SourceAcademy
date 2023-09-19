function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}

draw_data(my_map(x => x + 1, list(0, 1, 2, 3)));

// function remove_duplicates(lst) {
//     function helper(xs, ret) {
//         return is_null(xs)
//                 ? ret
//                 : length(filter(x => x === head(xs), xs)) === 1
//                 ? helper(tail(xs), pair(head(xs), ret))
//                 : helper(remove_all(head(xs), xs), pair(head(xs), ret));
                
//     }
//     return helper(lst, null);
// }

// function remove_duplicates(lst) {
//     return is_null(lst)
//             ? null
//             : pair(head(lst), remove_duplicates(filter(x => x !== head(lst), tail(lst))));
// }

// function remove_duplicates(lst) {
//     return is_null(lst)
//             ? null
//             : pair(head(lst), remove_duplicates(remove_all(head(lst), lst)));
// }

// display(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
// display(remove_duplicates(list("a", "x", "b", "c", "c", "b", "d")));


// function makeup_amount(x, coins) {
//     if (x === 0) {
//         return list(null);
//     } else if (x < 0 || is_null(coins)) {
//         return null;
//     } else {
//     // Combinations that do not use the head coin.
//     const combi_A = makeup_amount(x, tail(coins));
    
//     // Combinations that do not use the head coin
//     // for the remaining amount.
//     const combi_B = 1;
    
//     // Combinations that use the head coin.
//     const combi_C = is_null(makeup_amount(x - head(coins), tail(coins))) 
//                             ? null
//                             : map(x => append(list(head(coins)), x), 
//                                                                     makeup_amount(x - head(coins), tail(coins)));
    
//     return append(combi_A, combi_C);
//     }
// }

function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
    // Combinations that do not use the head coin.
    const combi_A = makeup_amount(x, tail(coins));
    
    // Combinations that do not use the head coin
    // for the remaining amount.
    const combi_B = makeup_amount(x - head(coins), tail(coins));
    
    // Combinations that use the head coin.
    const combi_C = map(combi => pair(head(coins), combi), combi_B);
    return append(combi_A, combi_C);
    }
}

display_list(makeup_amount(6, list(1, 2)));