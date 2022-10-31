var data = '';
let A = [];
let B = [];
var count = 1;
let player;
let inGame = true;
start();

function start() {
    for (let i = 0; i < 12; i++) {
        B = new Array();
        for (let j = 0; j < 16; j++) {
            if (i == 0)
                B[j] = j
            else if (j == 0)
                B[j] = i
            else
                B[j] = '';
        }
        A[i] = B;
    }
    draw()
}
function changeValue(x, y, element) {
    if (inGame == false) return;
    if (A[x][y] != '') return;
    count++;
    if (count % 2 == 0) {
        player = 'x';
    } else {
        player = 'o';
    }
        element.innerText = player;
        A[x][y] = player;
        checkWin(x, y, player); 
         console.log(A);     
}

function checkWin(x, y, player) {
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 15; j++) {
            if (i == x && j == y) {
                if ((A[i][j] == player && A[i][j + 1] == player && A[i][j + 2] == player && A[i][j + 3] == player && A[i][j + 4] == player) ||
                    (A[i][j] == player && A[i][j - 1] == player && A[i][j - 2] == player && A[i][j - 3] == player && A[i][j - 4] == player)) {
                    notify(player);
                }
                if ((A[i][j] == player && A[i + 1][j] == player && A[i + 2][j] == player && A[i + 3][j] == player && A[i + 4][j] == player) ||
                    (A[i][j] == player && A[i - 1][j] == player && A[i - 2][j] == player && A[i - 3][j] == player && A[i - 4][j] == player)) {
                    notify(player)
                }
                if ((A[i][j] == player && A[i + 1][j + 1] == player && A[i + 2][j + 2] == player && A[i + 3][j + 3] == player && A[i + 4][j + 4] == player) ||
                    (A[i][j] == player && A[i - 1][j - 1] == player && A[i - 2][j - 2] == player && A[i - 3][j - 3] == player && A[i - 4][j - 4] == player)) {
                    notify(player)
                }
                if ((A[i][j] == player && A[i + 1][j - 1] == player && A[i + 2][j - 2] == player && A[i + 3][j - 3] == player && A[i + 4][j - 4] == player) ||
                    (A[i][j] == player && A[i - 1][j + 1] == player && A[i - 2][j + 2] == player && A[i - 3][j + 3] == player && A[i - 4][j + 4] == player)) {
                    notify(player)
                }

            }
        }
    }
}
function notify(player) {
    alert(`${player} win`);
    inGame = false;
}
function draw() {
    if (!inGame) {
        data = '';
    }
    for (i = 0; i < 12; i++) {
        data += '<tr>';
        for (j = 0; j < 16; j++) {
            if (i == 0 && j == 0) {
                data += ' <td> &nbsp;&nbsp; </td>';
            }
            else if (i == 0 || j == 0) {
                data += '<td>' + A[i][j] + '</td>';
            }
            else {
                data += `<td onclick ="changeValue(${i},${j},this);">  </td>`;
            }
        } data += '</tr>';
    }
    document.getElementById('caroTable').innerHTML = data;

}
resetBtn.onclick = function () {
    inGame = false;
    start()
    inGame = true;
    // window.location.reload();
}
