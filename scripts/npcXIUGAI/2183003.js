var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {

        var selStr = "来自远方的冒险家#e #r#h ##k#n  你好！\r\n为了解放我们#r#e 阿斯旺 #n#k的人民，现在我们发布招募！\r\n#d冒险家们请选择：#b\r\n\r\n#L1#参加阿斯旺解放战！#l#r\r\n\r\n#e#L2#前往希拉之塔击败希拉！#l#n";
        cm.sendSimple(selStr);


    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(2183003, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2183003, 1);
            break;
        case 2:
            cm.dispose();
            cm.warp(262030000);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank()>0) {
           // cm.addBank();
            cm.openNpc(9300011, 4);
            } else {
            cm.openNpc(9300011, 4);
            }
            break;

        case 4:
            cm.dispose();
            cm.openNpc(9300011, 5);
            break;
		}
    }
}