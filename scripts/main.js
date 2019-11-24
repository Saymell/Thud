const areaTemplate = [
    [0, 0, 0, 0, 0, 2, 2, 1, 2, 2],
    [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 3, 4, 3, 1, 1, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 2, 2, 1, 2, 2],
]

const area = document.querySelector('.area-body');

function areaGeneration() {
    areaTemplate.forEach((item, i) => {
        let out = '';
        item.forEach((item, k) => {
            switch (true) {

                case item === 0:
                    out += `<td class="hidden" data-X="${k}" data-Y="${i}"></td>`;
                    break;
                case item === 1:
                    out += `<td class="null" data-X="${k}" data-Y="${i}"></td>`;
                    break;
                case item === 2:
                    out += `<td class="dwarf" data-X="${k}" data-Y="${i}">D</td>`;
                    break;
                case item === 3:
                    out += `<td class="troll" data-X="${k}" data-Y="${i}">T</td>`;
                    break;
                case item === 4:
                    out += `<td class="mountain" data-X="${k}" data-Y="${i}">X</td>`;
                    break;
            }
        })
        area.insertAdjacentHTML("beforeend", `<tr class="row">${out}</tr>`)
    })
}

areaGeneration();