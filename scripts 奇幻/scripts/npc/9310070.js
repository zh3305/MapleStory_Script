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
            var selStr = "亲爱的#r" + cm.getChar().getName() + "#k你好，想在这里租借什么？#r\r\n#L0#项目说明#b\r\n#L1#租借喇叭  #L2#租借勋章  #L3#租借装备  #L4#租借商城";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
	    cm.dispose();
            cm.sendNext("#b项目简介:#b\r\n1.在本NPC租借的物品请谨慎选择。\r\n2.在本NPC租借的部分勋章需要椅子或人气。\r\n3.在本NPC租借的所有物品全部由冒险岛金币购买。\r\n4.在本NPC租借的部分物品全部都有时间限制，超过时间物品将自动消失。");
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