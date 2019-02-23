/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    if (status == 0) {
        ms.getDirectionStatus(true);
	ms.DublStart(true);
        ms.EnableUI(1);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
	ms.topMsg("某个下雨天");
	ms.getDirectionInfo(3, 2);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 2) {
	ms.DublStart(false);
	ms.getDirectionInfo(1, 200);
    } else if (status == 3) {
	ms.DublStart(true);
	ms.topMsg("飞花园深处");
	ms.getDirectionStatus(true);
	ms.getDirectionInfo(1, 6000);
    } else{
	//ms.lockUI();
	ms.DublStart(false);
	ms.EnableUI(0);
	ms.DisableUI(false);
        ms.enableActions();
	ms.dispose();
    }
}

