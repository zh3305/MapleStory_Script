/*
 脚本功能：拍卖脚本V2版
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
           cm.sendOk(cm.getEquipBySlot(1).getState());
           cm.dispose();
        }//a
    }//mode
}//f