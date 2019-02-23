/* RED 1st impact
 Mai
 Made by Daenerys
 */

var status = -1;
var sel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else
    if (status == 0) {
        cm.dispose();
        status--;
    }
    if (status == 0) {
        cm.sendSimple("想培養基礎這裡可以說是再適合不過了.你想在哪裡修練呢? \r\n#b#L0#冒險者修練場1#l\r\n#b#L1#冒險者修練場2#l\r\n#b#L2#冒險者修練場3#l\r\n#b#L3#冒險者修練場4#l");
    } else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000022, 4);
                cm.dispose();
            } else {
                cm.warp(1010100, 4);
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000023, 4);
                cm.dispose();
            } else {
                cm.warp(1010200, 4);
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000024, 4);
                cm.dispose();
            } else {
                cm.warp(1010300, 4);
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000025, 4);
                cm.dispose();
            } else {
                cm.warp(1010400, 4);
                cm.dispose();
            }
        }
    }
}