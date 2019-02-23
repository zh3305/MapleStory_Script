/*
    Made by Bin
*/

var status = -1;

function action(mode, type, selection) {
	if (mode > 0) {
		status++;
	} else {
		status--;
	}

	if (status == 0) {
                ms.enableActions();
		ms.forceStartQuest(23200);
                ms.enableActions();
                ms.EnableUI(0);
                ms.enableActions();
                ms.dispose();
	}
}
