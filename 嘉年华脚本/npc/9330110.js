var status = -1;
var sel;

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (status == 0) {
        cm.sendNext("欢迎~你是要来购买鱼饵，对吧？");
    } else if (status == 1) {
        cm.sendSimple("您想做什么呢？ \n\r #b#L0# 使用雇佣钓手鱼饵罐头#k#b \n\r #L1# 购买雇佣钓手专用一般鱼饵#k");
    } else if (status == 2) {
        sel = selection;
        if (sel == 0) {
            if (cm.canHold(2300003, 120) && cm.haveItem(5350003)) {
                cm.gainItem(5350003, -1);
                cm.gainItem(2300003, 20);
                cm.sendOk("兑换成功,祝您钓鱼愉快。");
            } else {
                cm.sendOk("请确认你有雇佣钓手鱼饵罐头并整理下你的背包空间。");
            }
            cm.safeDispose();
        } else if (sel == 1) {
            if (cm.getPQLog("购买鱼饵") <= 0) {
                if (cm.canHold(2300002, 120) && cm.getMeso() >= 300000) {
                    cm.gainMeso(-300000);
                    cm.gainItem(2300002, 120);
                    cm.sendOk("购买成功,祝您钓鱼愉快。");
                    cm.setPQLog("购买鱼饵");
                } else {
                    cm.sendOk("请整理下你的背包空间。");
                }
            } else {
                cm.sendOk("鱼饵一天只能购买一次！");
            }
            cm.safeDispose();
        }
    }
}
