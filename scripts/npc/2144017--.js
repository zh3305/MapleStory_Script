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
if (cm.getMapId() == 272020110) {
      cm.sendSimple("穿越时空过来的冒险家!\r\n你是不是想要来阻止#e#r  阿卡伊勒#n  #k？\r\n\r\n#b#L1#是的。为了时间女神伦娜！我要打败阿卡伊勒！-----1#l");
     //cm.openNpc(1104209,1);

 } else if (cm.getMapId() == 272020200) {
      cm.openNpc(2144017,1);
 }

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
                cm.openNpc(2144017,11);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2144017,1);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1104209,2);
            break;

		}
    }
}