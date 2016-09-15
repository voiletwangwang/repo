/**
 * Created by Administrator on 2016/8/9.
 */
/*
* 显示数字的动画：
* 在x=i，y=j的位置上 显示数字 该数字的值=randnumber
* 在这个显示的过程中 设置了一个50毫秒的动画效果
*/

function showNumberWithAnimation(i, j, randNumber) {
    var numberCell = $('#number-cell-' + i + '-' + j);

    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(randNumber);

    /*numberCell.text(getNumberText(randNumber));*/

    numberCell.animate({
        width:cellSideLength,
        height:cellSideLength,
        top:getPosition(i),
        left:getPosition(j)
    },50)
}
/*
* 移动数字的动画
* 从x=fromx，y=fromy的位置移动到x=tox，y=toy的位置
* 在这个显示过程中设置了一个200毫秒的动画效果
*/
function showMoveAnimation(fromx, fromy, tox, toy) {
    var numberCell = $('#number-cell-' + fromx + '-' + fromy);
    numberCell.animate({
        top:getPosition(tox),
        left:getPosition(toy)
    },200);
}
function updateScore(score) {
    $('#score').text(score);
}












