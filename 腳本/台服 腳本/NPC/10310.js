/* RED 1st impact
    Ray of Light
    Made by Pungin
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
	} else {
        status--;
    }

    if(cm.isAllReactorState(1008010, 5) == true){
		if (status == -1 && mode != 1) {
			cm.sendNextS("想到要去不知道的地方,就有點害怕...", 16);
			cm.dispose();
		} else if (status == 0) {
			cm.sendYesNo("你要離開這裡,到新的世界去嗎?");
		} else if (status == 1) {
			cm.sendNextS("走吧,到新的世界!", 16);
		} else if (status == 2) {
			cm.dispose();
			cm.forceStartQuest(32200);
			cm.forceCompleteQuest(32200);
			cm.gainExp(16);
			cm.warp(4000002,0);
		} else {
			cm.dispose();
		}
	} else {
		cm.topMsg("若不粉碎鎖鏈就無法逃脫.");
		cm.dispose();
    }
}