var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("好的当你准备好奥去的时候告诉我!");
            cm.dispose();
            return;
        }
        status--;
    }
    if (cm.getMapId() == 680000300 && cm.getQuestRecord(160002).getCustomData() != null) {
        var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
        if (dat >= 30) {
            if (status == 0) {
                cm.sendYesNo("现在可以进行下一阶段,是否要进入?");
            } else {
                cm.warpMap(680000400, 0);
                cm.dispose();
            }
            return;
        }
    }

    if (cm.getMapId() == 680000400 && cm.getQuestRecord(160002).getCustomData() != null) {
        var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
        if (dat >= 30) {
            if (status == 0) {
                cm.sendYesNo("我可以送你们到婚礼盒,听说里面有好多礼物,你想现在就去么?");
            } else {
                cm.warpParty(680000401, 0);
                cm.dispose();
            }
            return;
        }
    }
    if (status == 0) {
        cm.sendYesNo("我可以送你出去外面,你想现在就离开这里么?");
    } else if (status == 1) {
        cm.warp(680000500, 0);
        cm.dispose();
    }
}
