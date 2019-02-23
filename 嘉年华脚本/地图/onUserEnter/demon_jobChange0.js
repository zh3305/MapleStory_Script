/*
 Made by Bin
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
        ms.EnableUI(1); // Disable UI   
         ms.sendSelfTalk(3, 2159307, "使用原来的力量，还是使用反抗黑魔法师的力量？");
        ms.enableActions();

    } else if (status == 1) {
        ms.getChoiceText(1, 0x15, 2159311);
        ms.enableActions();
    } else if (status == 2) {
        if (selection == 1) {
            for (var i = 0; i < 9; i++) {
                ms.getLevelup();
            }
            ms.enableActions();
            ms.changeJob(3100);
            ms.EnableUI(0);
            ms.enableActions();
            ms.sendchangeMap(310000000);
            ms.enableActions();
            ms.dispose();
        } else {
            for (var i = 0; i < 9; i++) {
                ms.getLevelup();
            }
            ms.enableActions();
            ms.changeJob(3101);
            ms.EnableUI(0);
            ms.enableActions();
            ms.sendchangeMap(310000000);
            ms.enableActions();
            ms.dispose();
        } 
    }
}
