let level = "easy";
let sectionSudoku = document.querySelector('.sudoku-board');
let levelField = document.querySelector('#level');
let p = document.querySelector('#sudokuAns');
let genBtn = document.querySelector('#genSudoku');
let checkBtn = document.querySelector('#checkSudoku');
let data;
let solution;

function generate() {
    sectionSudoku.innerHTML = "";
    level = levelField.value;
    data = sudoku.generate(level);
    solution = sudoku.solve(data);
    let gridSudoku = sudoku.board_string_to_grid(data);

    gridSudoku.forEach(row => {
        row.forEach(el => {
            let td = document.createElement('div');
            td.innerText = el != "." ? el : "";
            if (el == ".") td.setAttribute('contenteditable', true)
            sectionSudoku.appendChild(td)
        })
    })
}

genBtn.addEventListener('click', generate)

function validate() {
    p.innerText = sectionSudoku.textContent == solution ? "Correct" : "Incorrect"
}

checkBtn.addEventListener('click', validate)
