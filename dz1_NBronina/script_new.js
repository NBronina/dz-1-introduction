/**
 *Сортировка массива. Исправленный вариант. Добавлено преобразование строки в число.
*/
/*jslint browser: true, devel: true */
function sIncrease(i, ii) {
    "use strict";
    var returnval;
    if (i > ii) {
        returnval = 1;
    } else if (i < ii) {
        returnval = -1;
    } else {
        returnval = 0;
    }
    return returnval;
}
function sDecrease(i, ii) {
    "use strict";
    var returnval;
    if (i > ii) {
        returnval = -1;
    } else if (i < ii) {
        returnval = 1;
    } else {
        returnval = 0;
    }
    return returnval;
}
function validForm(x) {
    "use strict";
    var value, arr, count, i, j, max;
    value = document.getElementById('mass').value;
    value = value.replace(/,/g, '');
    value = value.replace(/;/g, '');
    value = value.replace(/,/g, '');
    value = value.replace(/\;/g, '');
    value = value.replace(/\[/g, '');
    value = value.replace(/\]/g, '');
    arr = value.split(" ").map(function (item) {
        return +item;
    });
    count = arr.length - 1;
    for (i = 0; i < count; i = i + 1) {
        for (j = 0; j < count - i; j = j + 1) {
            if (arr[j] > arr[j + 1]) {
                max = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = max;
            }
        }
    }
    if (x === 'up') {
        alert(arr);
    }
    if (x === 'down') {
        alert(arr.sort(sDecrease));
    }
}