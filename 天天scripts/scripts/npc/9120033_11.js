importPackage(net.sf.odinms.client);
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("什么？");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendNext("伟大的安拉女神需要5张卷轴碎片制作 #b祝福卷轴#k .");
        }
        else if (status == 1) {
            if ((cm.haveItem(4001136, 5)) &&

            (cm.haveItem(2050003)) && (cm.getMeso() >= 100000)) {
                cm.sendYesNo("一道光，显现出女神的模样.女神心灵感应对你说：是否合成 #b祝福卷轴#k ？");
            }
            else if (!cm.haveItem(4001136, 5)) {
                cm.sendOk("祝福卷轴需要 5 张 #b卷轴碎片#k 的力量才能够合成 .");
                cm.dispose();
            }
            else if (!cm.haveItem(2050003)) {
                cm.sendOk("5张卷轴碎片之后还需要1瓶圣水作为制作 #b祝福卷轴#k 药引.");
                cm.dispose();
            }
            else if (!cm.getMeso() <= 100000) {
                cm.sendOk("你还需要 #b100000金币#k 作为制作卷轴的费用.");
                cm.dispose();
            }

        }
        else if (status == 2) {
            cm.LaBaNotice("一道光 " + cm.getplayername() + " 玩家在女神的庇佑下成功合成了 祝福卷轴 。"); 
            cm.gainMeso( - 100000);
            cm.gainItem(4001136, -5);
            cm.gainItem(2050003, -1);
            cm.gainItem(2340000, 1);
        }
    }
}