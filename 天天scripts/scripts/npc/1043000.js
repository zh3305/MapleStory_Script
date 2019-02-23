/*
	完成良辰跳跳跳
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
     cm.setBossLog("良辰跳");
     cm.setBossLog("总计良辰跳", 1);
     cm.gainMeso(1000000);
     cm.gainItem(4032398,1);
     cm.warp(910000000);
     cm.sendOk("那去吧赤珠是你的了,这100W也是你的了!你们就此罢手，那良辰在此多谢了，他日，必有重谢。");
     cm.dispose();
}