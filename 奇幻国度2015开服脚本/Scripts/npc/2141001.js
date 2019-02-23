/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Forgotten Twilight
	Description: 		品克缤远征
*/

function start() {
    cm.dispose();
    if (cm.getChannelNumber() == 1) { //普通品克缤远征
        cm.openNpc(2141001, 1);
    } else if (cm.getChannelNumber() == 2) { //混沌品克缤远征
        cm.openNpc(2141001, 2);
    } else {
        cm.sendOk("只有在 #r1#k 和 #r2#k 频道才可以参加品克缤远征.\r\n\r\n #b1 频道为 普通品克缤远征#k\r\n\r\n #r2 频道为 混沌品克缤远征#k");
    }
}