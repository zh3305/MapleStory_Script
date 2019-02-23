/*
    Made by Pungin
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	if (status == 0) {
		ms.getDirectionStatus(true);
		ms.EnableUI(1);
		ms.environmentChange("demonSlayer/whiteOut", 13);
		ms.getDirectionInfo(1, 1950);
	} else if (status == 1) {
		ms.forceStartQuest(32201);
		ms.dispose();
		ms.warp(4000010, 0);
	} else {
		ms.dispose();
	}
}


	
