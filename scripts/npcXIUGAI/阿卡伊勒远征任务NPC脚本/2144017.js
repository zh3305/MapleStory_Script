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
      cm.sendSimple("穿越时空过来的冒险家，你是不是想要来阻止#e#r阿卡伊勒#n？\r\n\r\n#b#L1#是的。为了时间女神伦娜！我要打败阿卡伊勒！-----1#l\r\n\r\n#b#L2#是的。为了时间女神伦娜！我要打败阿卡伊勒！-----2#l");
     //cm.openNpc(1104209,1);

 } else {

var selStr = "请选择你要去的地方：:\r\n\r\n#b#L0#离开#l";
        cm.sendSimple(selStr);
 }

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
                cm.warp(272020110);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(1104209,1);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1104209,2);
            break;

		}
    }
}