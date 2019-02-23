/* 高级神奇魔方碎片 */

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
        im.sendOk("搜集到#r30个#k#b#t2430481##k，可以获得#b#i2049400:##t2049400##k。搜集到#r100个#k可以获得#b#i2049701:##t2049701##k。");
        im.dispose();
    }
}