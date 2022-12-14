var data = '';
let A = [];
let B = [];
var count = 0;
let player;
let inGame = true;
let turn = 0;

start();

// start cho phép mình đưa biến count về 0, khởi tạo lại mảng A in vào bảng thông qua draw
function start() {
    count = 0;
    for (let i = 0; i < 13; i++) {
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

// changeValue cho phép em thay đổi player là x hay o, ghi vào mảng tại vị trí đó và kiểm tra chiến thắng thông qua checkWin

function changeValue(x, y, element) {

    if (inGame == false) return;
    if (A[x][y] != '') return;
    count++;

    if (count % 2 == 0) {
        player = 'x';
        turn = count / 2;
        element.style.color = "red"
        document.getElementById("pl").innerHTML = '<img src="images/Opng.png">';

    } else {
        player = 'o';
        turn = (count + 1) / 2;
        element.style.color = "blue"
        document.getElementById("pl").innerHTML = '<img src="images/Xpng.png">';
    }
    document.getElementById('turn').innerHTML = `Turn: ${turn}`;
    element.innerHTML = player;
    A[x][y] = player;
    checkWin(x, y, player, turn, element);
}

// checkWin để xem các trường hợp làm cho player win và thông báo qua notify()

function checkWin(x, y, player, turn,element) {
    for (let i = 1; i <= 11; i++) {
        for (let j = 1; j <= 15; j++) {
            if (i == x && j == y) {
                // chiều ngang đúng
                if ((A[i][j] == player && A[i][j + 1] == player && A[i][j + 2] == player && A[i][j + 3] == player && A[i][j + 4] == player) ||
                    (A[i][j] == player && A[i][j - 1] == player && A[i][j - 2] == player && A[i][j - 3] == player && A[i][j - 4] == player) ||
                    (A[i][j] == player && A[i][j - 1] == player && A[i][j - 2] == player && A[i][j + 1] == player && A[i][j + 2] == player) ||
                    (A[i][j] == player && A[i][j - 1] == player && A[i][j + 1] == player && A[i][j + 2] == player && A[i][j + 3] == player) ||
                    (A[i][j] == player && A[i][j + 1] == player && A[i][j - 1] == player && A[i][j - 2] == player && A[i][j - 3] == player) ||

                    // chiều dọc đúng            
                    (A[i][j] == player && A[i + 1][j] == player && A[i + 2][j] == player && A[i + 3][j] == player && A[i + 4][j] == player) ||
                    (A[i][j] == player && A[i - 1][j] == player && A[i - 2][j] == player && A[i - 3][j] == player && A[i - 4][j] == player) ||
                    (A[i][j] == player && A[i - 1][j] == player && A[i - 2][j] == player && A[i + 1][j] == player && A[i + 2][j] == player) ||
                    (A[i][j] == player && A[i - 1][j] == player && A[i + 1][j] == player && A[i + 2][j] == player && A[i + 3][j] == player) ||
                    (A[i][j] == player && A[i + 1][j] == player && A[i - 1][j] == player && A[i - 2][j] == player && A[i - 3][j] == player) ||

                    //chéo chính đúng
                    (A[i][j] == player && A[i + 1][j + 1] == player && A[i + 2][j + 2] == player && A[i + 3][j + 3] == player && A[i + 4][j + 4] == player) ||
                    (A[i][j] == player && A[i - 1][j - 1] == player && A[i - 2][j - 2] == player && A[i - 3][j - 3] == player && A[i - 4][j - 4] == player) ||
                    (A[i][j] == player && A[i + 1][j + 1] == player && A[i + 2][j + 2] == player && A[i - 1][j - 1] == player && A[i - 2][j - 2] == player) ||
                    (A[i][j] == player && A[i + 1][j + 1] == player && A[i - 1][j - 1] == player && A[i - 2][j - 2] == player && A[i - 3][j - 3] == player) ||
                    (A[i][j] == player && A[i - 1][j - 1] == player && A[i + 1][j + 1] == player && A[i + 2][j + 2] == player && A[i + 3][j + 3] == player) ||

                    // chéo phụ đúng                    
                    (A[i][j] == player && A[i + 1][j - 1] == player && A[i + 2][j - 2] == player && A[i + 3][j - 3] == player && A[i + 4][j - 4] == player) ||
                    (A[i][j] == player && A[i - 1][j + 1] == player && A[i - 2][j + 2] == player && A[i - 3][j + 3] == player && A[i - 4][j + 4] == player) ||
                    (A[i][j] == player && A[i - 1][j + 1] == player && A[i - 2][j + 2] == player && A[i + 1][j - 1] == player && A[i + 2][j - 2] == player) ||
                    (A[i][j] == player && A[i - 1][j + 1] == player && A[i + 1][j - 1] == player && A[i + 2][j - 2] == player && A[i + 3][j - 3] == player) ||
                    (A[i][j] == player && A[i + 1][j - 1] == player && A[i - 1][j + 1] == player && A[i - 2][j + 2] == player && A[i - 3][j + 3] == player)
                ) {
                    notify(player, turn);       
                }
            }
        }
    }
}
// notify thông báo 
function notify(player, turn) {
    modal.style.display = "block"
    wintext.innerHTML=`Player: ${player} wins in ${turn} turns`;
    inGame = false;
}

// vẽ bảng và tạo sự kiện onclick lên các vị trí của bảng

function draw() {
    if (!inGame) {
        data = '';
    }
    for (i = 0; i < 12; i++) {
        data += '<tr>';
        for (j = 0; j < 16; j++) {
            if (i == 0 && j == 0) {
                data += '<td style="color: blue; background-color: rgb(106, 183, 210);cursor: no-drop;"> Pi97 </td>';
            }
            else if (i == 0 || j == 0) {
                data += '<td style="cursor: no-drop;">' + A[i][j] + '</td>';
            }
            else {
                data += `<td class="big-text" id='textwin' onclick ="changeValue(${i},${j},this);">  </td>`;
            }
        } data += '</tr>';
    }
    document.getElementById('caroTable').innerHTML = data;

}

// resetBtn giúp reset lại game 

resetBtn.onclick = function () {
    inGame = false;
    start()
    inGame = true;
    document.getElementById("pl").innerHTML = '<img src="images/Opng.png">';
    document.getElementById('turn').innerHTML = 'Turn: 1';
    // window.location.reload(); load lại trang cũng là 1 cách mà em nghĩ đến
}

// tạo 1 bảng modal box
    // lấy id bảng modal và id close
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

    // sự kiện clicks close
span.onclick = function () {
    modal.style.display = "none";
}
    // clicks ngoài màn hình 
document.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}