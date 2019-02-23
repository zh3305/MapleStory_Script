/*
 脚本功能：黄金寺院相关
 */

var a = 0;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            cm.sendSimple("这里是禁地，你想做什么？#b\r\n#L0#  我想进去寺院挑战拉瓦那！")
        }else if (a == 1){
            cm.warp(252030000,0)
            cm.dispose();
        }//a
    }//mode
}//f