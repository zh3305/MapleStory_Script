/* 	Garnox - Pet Scientist
	Singapore and NLC
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
	}
        status--;
    }
    if (status == 0) {
	cm.sendNext("你好，我是迦尔努斯宠物专家。你听说过宠物进化吗？");
    } else if (status == 1) {
	cm.sendYesNo("如果你的宠物达到了15级,那么就可以进化哟,那么你想让你的宠物进化么?");
    } else if (status == 2) {
	
	cm.dispose();
    }
}
