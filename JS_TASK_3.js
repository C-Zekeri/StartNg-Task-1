let x = 10;
function NumberCheck(x) {
    let arr = []
    for (i = 0; i <= x; i++) {
        if ( (i % 2 && i % 3) == 0 ) {
            i = "yu-gi";
        }
        else if ( (i % 2 && i % 5) == 0 ) {
            i = "yu-oh";
        }
        else if ( (i % 3 && i % 5) == 0 ) {
            i = "gi-oh";
        }
        else if ( (i % 2) == 0) {
            i = "yu";
        }
        else if ( (i % 3) == 0 ) {
            i = "gi";
        }
        else if ( (i % 5) == 0) {
            i = "oh";
        }
        else {
            i = x;
        }
        arr.push(i);
    }
    return arr;
}
NumberCheck(x = 100);
NumberCheck(x = 50);
