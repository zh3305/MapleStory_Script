/* ===========================================================
			Resonance
	NPC Name: 		Dragon
	Map(s): 		Dream World: Dream Forest(900010200)
	Description: 	Warps to Utah's House
=============================================================
Version 1.0 - Script Done.(31/5/2010)
=============================================================
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendNext("你终于来了。拥有契约者资格的人……");
        } else if (status == 1) {
            cm.sendNextPrev("执行契约吧……");
        } else if (status == 2) {
            cm.warp(900090101);
            cm.dispose();
        }
    }
}