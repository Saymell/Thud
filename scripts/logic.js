area.addEventListener('click', (e) => {
    const cell = e.target;;
    if (cell.className === 'troll') {
        document.querySelectorAll('td').forEach((item) => {
            item.classList.remove('select-unit');
            item.classList.remove('select-move');
        })
        cell.classList.add('select-unit');
        select = moveTroll(+cell.dataset.x, +cell.dataset.y);
    }
    if (cell.className === 'dwarf') {
        document.querySelectorAll('td').forEach((item) => {
            item.classList.remove('select-unit');
            item.classList.remove('select-move');
        })
        cell.classList.add('select-unit');
        select = moveDwarf(+cell.dataset.x, +cell.dataset.y);
    }
    if (cell.classList.contains('select-move')) {
        select.innerText = ''
        select.className = 'null';
        document.querySelectorAll('.select-move').forEach((item) => {
            item.innerText = '';
            item.classList.remove('select-move');
        })
        cell.innerText = 'T';
        cell.className = 'troll';
    }
})

function moveTroll(x, y) {
    let selectUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]');
    for (let i = -1; i < 2; i++) {
        for (let k = -1; k < 2; k++) {
            if ((x + i) >= 0 && (y + k) >= 0 && (x + i) <= 14 && (y + k) <= 14) {
                let select = document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + k) + '"]');
                if (select.className === 'null') {
                    select.classList.add('select-move');
                }
            }
        }
    }
    return selectUnit;
}

// function moveDwarf(x, y) {
//     let selectUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]');
//     for (let i = 0; i < 15; i++) {
//         let select = [];
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]'));
//         }
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]'));
//         }
//         if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]'));
//         }
//         if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]'));
//         }
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]'));
//         }
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]'));
//         }
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]'));
//         }
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]') != null) {
//             select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]'));
//         }
//         select.forEach((item) => {
//             if (item.className === 'null') {
//                 item.classList.add('select-move');
//             }
//         })
//     }
//     return selectUnit;
// }

// -1 -1
// -1 +1
// -1 0
// +1 -1
// +1 0
// +1 +1
// 0 +1
// 0 -1
function moveDwarf(x, y) {
    let selectUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]');
    let select = [];
    for (let i = 15; i > -15; i--) {
        if (i = 0) { console.log('dasd') }
        if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]') != null) {
            // if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]').classList.contains('null') != true) {
            //     break
            // }
            select.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]'))
        }
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]') != null) {
            select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]'))
        }
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]') != null) {
            select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]'))
        }
        if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]') != null) {
            select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]'))
        }
    }
    select.forEach((item) => {
        if (item.className === 'null') {
            item.classList.add('select-move');
        }
    })
    return selectUnit;
}


// function moveDwarf(x, y) {
//     let selectUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]');
//     let select = [];
//     for (let i = 0; i < 15; i++) {
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]') != null) {
//             if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]').classList.contains('troll')) {
//                 break
//             }
//             if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]').classList.contains('dwarf')) {
//                 document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]').style = "visibility: hidden;"
//     }
//     select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]'));
// }
// }
// for (let i = 0; i < 15; i++) {
//     if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]') != null) {
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]').classList.contains('troll')) {
//             break
//         }
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]').classList.contains('dwarf')) {
//             document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]').style = "visibility: hidden;"
// }
// select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]'));
// }
// }
// for (let i = 0; i < 15; i++) {
//     if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]') != null) {
//         if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]').classList.contains('troll')) {
//             break
//         }
//         if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]').classList.contains('dwarf')) {
//             document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]').style = "visibility: hidden;"
// }
// select.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]'));
// }
// }
// for (let i = 0; i < 15; i++) {
//     if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]') != null) {
//         if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]').classList.contains('troll')) {
//             break
//         }
//         if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]').classList.contains('dwarf')) {
//             document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]').style = "visibility: hidden;"
// }
// select.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]'));
// }
// }
// for (let i = 0; i < 15; i++) {
//     if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]') != null) {
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]').classList.contains('troll')) {
//             break
//         }
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]').classList.contains('dwarf')) {
//             document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]').style = "visibility: hidden;"
//     }
//     select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]'));
// }
// }
// for (let i = 0; i < 15; i++) {
//     if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]') != null) {
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]').classList.contains('troll')) {
//             break
//         }
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]').classList.contains('dwarf')) {
//             document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]').style = "visibility: hidden;"
//     }
//     select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]'));
// }
// }
// for (let i = 0; i < 15; i++) {
//     if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]') != null) {
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]').classList.contains('troll')) {
//             break
//         }
//         if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]').classList.contains('dwarf')) {
//             document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]').style = "visibility: hidden;"
//     }
//     select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]'));
// }
// }
// for (let i = 0; i < 15; i++) {
//     if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]') != null) {
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]').classList.contains('troll')) {
//             break
//         }
//         if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]').classList.contains('dwarf')) {
//             document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]').style = "visibility: hidden;"
//     }
//     select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]'));
// }
// }
// select.forEach((item) => {
//     if (item.className === 'null') {
//         item.classList.add('select-move');
//     }
// })
// return selectUnit;
// }