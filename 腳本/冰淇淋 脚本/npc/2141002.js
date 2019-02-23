/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Twilight of the gods
	Description: 		Pink Bean
 */

function start() {
    cm.sendYesNo("你想从这里出去吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.openNpc(9310144);
    }
    cm.dispose();
}