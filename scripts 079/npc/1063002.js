/* NPC : A pile of white flower
 * Location : Sleepywood, forest of patient
 */

importPackage(net.sf.odinms.client);

var itemSet = new Array(4020007, 4020008, 4010006);
var rand = Math.floor(Math.random() * itemSet.length);


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.warp(105040300);
            
            if (cm.getChar().getMapId() == 105040300) {
                if (cm.getQuestStatus(2052).equals(MapleQuestStatus.Status.STARTED) && !cm.haveItem(4031025)) {
                    cm.gainItem(4031025, 10);}
            } else {
                cm.gainItem(itemSet[rand], 2);
            }
            cm.dispose();
        }
    }
}