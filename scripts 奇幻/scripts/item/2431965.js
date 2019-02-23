/*
*	ƒ¨»œ…À∫¶∆§∑Ù
*/
/*
function start() {
		im.changeHuerSkin(0);
		//im.gainItem(2431965,-1);
		im.dispose();
}
*/
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            im.dispose();
		} else if (status == 0) {
			im.sendGetNumber("Skill Styles ID:", 0, 0, 999999);
		} else if (status == 1) {
			im.changeHuerSkin(selection);
			//im.gainItem(2431965,-1);
			im.dispose();
		}
    }//mode
}//f