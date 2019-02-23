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
    if (status == 0) {
            var selStr = "亲爱的#r" + cm.getChar().getName() + "#k你好，我可以每天给您福利#r\r\n#L0#福利说明#b\r\n#L1#冒险币购买喇叭\r\n#L2#冒险币购买勋章\r\n#L3#冒险币购买装备\r\n#L4#冒险币购买商城装备";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
	    cm.dispose();
            cm.sendNext("#b福利简介:#b\r\n1.福利是方便玩家在游戏更快捷更方便\r\n2.在本NPC领取福利完全免费.只要您上线就能得到\r\n3.希望您能多多支持永恒冒险岛.让您的游戏.不在缺少快乐");
            break;
        case 1:
            cm.dispose();
	    cm.openNpc(9900004,5);
            break;
        case 2:
            cm.dispose();
	    cm.openNpc(9900004,6);
            break;
        case 3:
            cm.dispose();
	    cm.openNpc(9900004,7);
            break;
        case 4:
            cm.dispose();
	    cm.openNpc(9900004,8);
            break;
        }
    }
}