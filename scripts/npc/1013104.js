/* ===========================================================
			Resonance
	NPC Name: 		Hen
	Map(s): 		Utah's House: Front Porch(100030102)
	Description: 	Obtain Egg
=============================================================
Version 1.0 - Script Done.(4/6/2010)
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
            if (cm.isQuestActive(22007)) {
                cm.sendNext("#b(拿出了鸡蛋。快把它交给尤塔吧。)#k");
                cm.gainItem(4032451, 1);
            } else {
                cm.sendOk("#b不需要拿出鸡蛋。#k");
            }
            cm.dispose();
        }
    }
}