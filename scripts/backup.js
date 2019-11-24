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
        if (select.classList.contains('troll')) {
            cell.innerText = 'T';
            cell.className = 'troll';
        }
        if (select.classList.contains('dwarf')) {
            cell.innerText = 'D';
            cell.className = 'dwarf';
        }
        select.innerText = ''
        select.className = 'null';
        document.querySelectorAll('.select-move').forEach((item) => {
            item.innerText = '';
            item.classList.remove('select-move');
        })
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

function moveDwarf(x, y) {
    let selectUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]');
    let select = [];
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]').classList.contains('null') != true) {
                break
            }
            select.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]'));
        }
    }
    select.forEach((item) => {
        if (item.className === 'null') {
            item.classList.add('select-move');
        }
    })
    return selectUnit;
}