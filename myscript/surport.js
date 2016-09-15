/**
 * Created by Administrator on 2016/8/9.
 */
//定义相对屏幕的尺寸
documentWidth = window.screen.availWidth;
gridContainerWith = 0.9 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

function getPosition(pos) {
    return cellSpace + pos *(cellSpace + cellSideLength);
}
/*function getNumberText(number) {
    switch (number) {
        case 2:
            return "2";
            break;
        case 4:
            return "4";
            break;
        case 8:
            return "8";
            break;
        case 16:
            return "16";
            break;
        case 32:
            return "32";
            break;
        case 64:
            return "64";
            break;
        case 128:
            return "128";
            break;
        case 256:
            return "256";
            break;
        case 512:
            return "512";
            break;
        case 1024:
            return "1024";
            break;
        case 2048:
            return "2048";
            break;
        case 4096:
            return "4096";
            break;
        case 8192:
            return "8192";
            break;
    }
    return "black";
}
*/
function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#ede0c8";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6c";
            break;
        case 3192:
            return "#93c";
            break;
    }
    return "black";
}
//设置数字的颜色，2、4为#776e65，其他为白色
function getNumberColor(number) {
    if (number <= 4)
        return "#776e65";
    return "#fff";
}
//判断当前各自是否有数字，即判断是不是一个非空的各自
function noSpace(board) {
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++){
            if (board[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}

/*
* 判断能否向左移动
* 1、只需判断每一行的后三列格子即可。
* 2、可以移动的条件是：
* 当前格子有数字，即board【i】【j】 ！= 0
* 左侧格子没有数字，即(board[i][j-1])==0)
* 左侧格子和当前格子数字相同，即board[i][j-1] == board[i][j]
*/
function canMoveLeft(board) {
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++){
            if (board[i][j] != 0){
                if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}
//判断能否上、右、下移动
function canMoveUp(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveRight(board) {
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 3; j++)
            if (board[i][j] != 0)
                if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j])
                    return true;
    return false;
}
function canMoveDown(board) {
    for (var j = 0; j < 4; j++)
        for (var i = 0; i < 3; i++)
            if (board[i][j] != 0)
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j])
                    return true;
    return false;
}
//判断水平方向是否可移动，即水平方向的两个目标格子 时间没有其他数字
function noBlockHorizontal(row, col1, col2, board){
    for (var i = col1 + 1; i < col2; i++){
        if (board[row][i] != 0){
            return false;
        }
    }
    return true;
}
function noBlockVertical(col, row1, row2, board){
    for (var i = row1 + 1; i < row2; i++){
        if (board[i][col] != 0){
            return false;
        }
    }
    return true;
}
function noMove (board){
    if (canMoveLeft(board) || canMoveUp(board) || canMoveDown(board) || canMoveRight(board)){
        return false;
    }
    return true;
}


