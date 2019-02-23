/* Author: Xterminator
	NPC Name: 		王美女
	Map(s): 		枫之高校
	Description: 		
*/
var status = 0;

function start() {
    if (cm.getMapId() == 744000000) {
        cm.sendYesNo("下课了，你想回家吗？");
    } else {
        cm.sendYesNo("还不赶快去上课！");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.getMapId() == 744000000) {
            cm.warp(100000000);
        } else {
            cm.warp(744000000);
        }
    }
    cm.dispose();
}