/*
	Marr - Tokyo Park 2095
*/

function start() {
    if (cm.getMapId() != 802000310) {
        cm.sendSimple("呜呜 ......! \r\n#b#L0#已经收集够10个#b#i4032192:##t4032192##k#l \r\n#b#L1#快点离开这里#l");

}  else {
      cm.sendOk("  呜呜 ......");

    } 
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (selection == 0) {
            if (cm.haveItem(4032192, 10)) {
                cm.gainItem(4032192, -10);
                cm.warp(802000313, 0);
            } else {
                cm.sendOk("Please collect 10 Energy Transmitter device!");
            }
        } else if (selection == 1) {
            cm.warp(802000310, 0);
        }
    }
    cm.dispose();
}