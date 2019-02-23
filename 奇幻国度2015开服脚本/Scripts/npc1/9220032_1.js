/*
 脚本功能：天空庭院相关
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
            cm.sendSimple("在这里可以获得幸运币，但是你真的要离开吗？#b\r\n#L0# 我想离开这里。\r\n#L1# 好吧。我要留在这里。")
        } else if (a == 1) {
            if (selection == 0) {
                cm.warp(706020100);
                cm.dispose();
            } else {
                cm.dispose();
            }
        }//a
    }//mode
}//f