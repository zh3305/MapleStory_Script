/*
    Made by Pungin
*/

var status = -1;

function start() {
	if (ms.getQuestStatus(32201) == 1) {
		ms.forceCompleteQuest(32201);
		ms.forceStartQuest(32202);
		ms.getDirectionInfo(1, 2100);
	} else {
		action(1, 0, 0);
	}
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	if (status == 0) {
		ms.sendSelfTalk("......這是楓樹?");
	} else if (status == 1) {
		ms.sendSelfTalk("先到下面去看看吧");
	} else if (status == 2) {
		ms.directionEffect("Effect/Direction3.img/effect/tuto/key/2", 3000000, -520, -740, 0);
		ms.topMsg("同時按下[↓]鍵與 [Alt] 或 [Space] (選擇型設定)鍵可以往下降");
		ms.introEnableUI(0);
		ms.forceCompleteQuest(32202);
		ms.dispose();
	} else {
		ms.dispose();
	}
}