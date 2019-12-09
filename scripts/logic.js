area.addEventListener('click', (e) => {
    const cell = e.target;
    if (cell.className === 'troll') {
        document.querySelectorAll('td').forEach((item) => {
            item.classList.remove('select-unit');
            item.classList.remove('select-move');
        })
        cell.classList.add('select-unit');
        out = moveTroll(+cell.dataset.x, +cell.dataset.y);
        out.move.forEach((item) => {
            if (item.classList.contains('null')) {
                item.classList.add('select-move');

            }
            if (item.classList.contains('dwarf')) {
                item.classList.add('kill-him');
            } else {

            }
        })
    }
    if (cell.className === 'dwarf') {
        document.querySelectorAll('td').forEach((item) => {
            item.classList.remove('select-unit');
            item.classList.remove('select-move');
        })
        cell.classList.add('select-unit');
        let dwarf = new Unit();
        out = dwarf.canMove(+cell.dataset.x, +cell.dataset.y);
        console.log(out);
        out.moveVariant.forEach((item) => {
            if (item.classList.contains('null')) {
                item.classList.add('select-move');
            }
        })
    }
    if (cell.classList.contains('select-move')) {
        if (out.unit.classList.contains('troll')) {
            cell.innerText = 'T';
            cell.className = 'troll';
        }
        if (out.unit.classList.contains('dwarf')) {
            cell.innerText = 'D';
            cell.className = 'dwarf';
        }
        out.unit.innerText = ''
        out.unit.className = 'null';
        document.querySelectorAll('.select-move').forEach((item) => {
            item.innerText = '';
            item.classList.remove('select-move');
        })
        document.querySelectorAll('td').forEach((item) => {
            item.classList.remove('select-unit');
            item.classList.remove('select-move');
            item.classList.remove('kill-him');
        })
    }
})

function moveTroll(x, y) {
    let selectUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]');
    let selectMove = [];
    for (let i = -1; i < 2; i++) {
        for (let k = -1; k < 2; k++) {
            if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + k) + '"]') != null) {
                selectMove.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + k) + '"]'));
            }
        }
    }
    let out = {
        unit: selectUnit,
        move: selectMove
    }
    return out;
}

function moveDwarf(x, y) {
    let selectUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]');
    let selectMove = [];
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y - i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y + i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y - i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x - i) + '"][data-Y="' + (y + i) + '"]'));
        }
    }
    for (let i = 1; i < 15; i++) {
        if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]') != null) {
            if (document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]').classList.contains('null') != true) {
                break
            }
            selectMove.push(document.querySelector('td[data-X="' + (x + i) + '"][data-Y="' + (y - i) + '"]'));
        }
    }
    let out = {
        unit: selectUnit,
        move: selectMove
    }
    return out;
}

class Unit {

    selectUnit(currentCell) {
        currentCell.classList.add('select-unit');
    }

    canMove(x, y) {
        let
            selectedUnit = document.querySelector('td[data-X="' + x + '"][data-Y="' + y + '"]'),
            moveVariant = [];


        for (let j = -15; j < 15; j++) {
            if (j === 0) { j = 1 }

            let
                gorizontal = document.querySelector('td[data-X="' + (x + j) + '"][data-Y="' + (y) + '"]'),
                vertical = document.querySelector('td[data-X="' + (x) + '"][data-Y="' + (y + j) + '"]'),
                diagonalOne = document.querySelector('td[data-X="' + (x + j) + '"][data-Y="' + (y + j) + '"]'),
                diagonalTwo = document.querySelector('td[data-X="' + (x - j) + '"][data-Y="' + (y + j) + '"]'),
                directions = [gorizontal, vertical, diagonalOne, diagonalTwo];

            directions.forEach(e => {
                if (e != null ) {
                    if (e.classList.contains('null') != true) {
                        directions.splice(directions.indexOf(e), 1);
                        console.log(directions)
                    }
                    moveVariant.push(e);
                }
            })    
        }
        let resault = {
            selectedUnit: selectedUnit,
            moveVariant: moveVariant
        }
        return resault;       
    }
}
