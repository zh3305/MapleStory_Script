/* 神奇魔方碎片 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        im.sendOk("搜集到#r10个#k#b#t2431893##k，可以获#b#i5062009:##t5062009##k。");
        im.dispose();
    }
}