/* global cm */

var status = -1;

function start() {
    cm.sendSimple("你好，" + cm.getChannelServer().getServerName() + "·彌莎為您服務，請問你想做什麼呢？\r\n#L1#用10萬楓幣交換一組女僕機器人#l");
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        if (cm.getMeso() < 100000) {
            cm.sendNext("很遺憾，你身上的楓幣好像不夠呢，快去打獵獲得足夠的楓幣然後來我這裡交換吧！");
            cm.dispose();
        } else if (!cm.canHold(1666001, 2)) {
            cm.sendNext("很遺憾，你身上的道具欄不夠呢，請清理後再來吧！");
            cm.dispose();
        } else {
            cm.gainMeso(-100000);
            cm.gainItem(1666001, 1);
            cm.gainItem(1672000, 1);
            cm.sendNext("給，這是你的女僕套組，使用它然後打女僕開商店你會看到很多東西哦！");
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}