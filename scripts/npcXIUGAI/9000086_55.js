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

       if(cm.getChar().getAccountID()==1){
var selStr = "#r" + cm.getVipname() + "#r#h ##k  #n您好，请选择您需要的服务:\r\n\r\n#b#L0#传送到市场#l #L2#查看怪物掉物#l\r\n#L1#快捷NPC服务#l#L5#管理雇佣商店#l\r\n#L7##rGM专用NPC#l \r\n我的NPC代号是 9000086  55";
        cm.sendSimple(selStr);

       } else {
        var selStr = "#r" + cm.getVipname() + "#r#h ##k  #n您好，请选择您需要的服务:\r\n\r\n#b#L0#传送到市场#l #L2#查看怪物掉物#l\r\n#L1#快捷NPC服务#l#L5#管理雇佣商店#l\r\n#L3#加满职业技能#l";
        cm.sendSimple(selStr);

     } 

        } else if (status == 1) { 
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("您已经在市场了，还想做什么？");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 3:
            cm.maxSkillsByJob();
            cm.dispose();
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("你的等级大于10,不能在新手地图练级.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(1012117);
            break;
        }
    }
}
