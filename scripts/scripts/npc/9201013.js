/*
	名字: 		玛嘉莱修女
	地图: 		婚礼村
	描述: 		婚礼预约助理
*/

var status = -1;
var mainmenu = "你好啊，今天天气真好啊。我是负责预约婚礼的玛嘉莱修女。需要我帮忙吗？\r\n\r\n#b#L0# 想预约婚礼需要做些什么？#l\r\n#L1# 我想预约简朴婚礼。#l\r\n#L2# 我想预约甜美婚礼。#l\r\n#L3# 我想预约豪华婚礼。#l"

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple(mainmenu);
    } else if (status == 1) {
        if (selection == 0) {
            status = 2;
            cm.sendNext("想预约婚礼，还需要先领取#b结婚券#k和#b订婚戒指#k等定情信物。当然，两位是否相爱则是必要条件了。如果集齐了这些东西，就和#b订婚对象组成2人组队#k，去预约婚礼吧。预约之后会获得几样有关婚礼预约的物品，所以记得在#b其他栏空出2格以上的空间#k。");
        } else if (selection == 1) {
            cm.sendNext("暂不支持...");
            cm.dispose();
        } else if (selection == 2) {
            cm.sendNext("暂不支持...");
            cm.dispose();
        } else if (selection == 3) {
            cm.sendNext("暂不支持...");
            cm.dispose();
        }
    } else if (status == 2) {
        cm.sendNext("想预约婚礼，还需要先领取#b结婚券#k和#b订婚戒指#k等定情信物。当然，两位是否相爱则是必要条件了。如果集齐了这些东西，就和#b订婚对象组成2人组队#k，去预约婚礼吧。预约之后会获得几样有关婚礼预约的物品，所以记得在#b其他栏空出2格以上的空间#k。");
    } else if (status == 3) {
        cm.sendNextPrev("对了！预约婚礼之后就#b不能取消预约，也不能取消订婚。#k所以请你慎重考虑之后再来预约。");
        cm.dispose();
    }
}