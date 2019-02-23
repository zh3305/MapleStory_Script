/*
测试发型脸型代码
*/
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            cm.dispose();
		} else if (status == 0) {
			cm.sendGetNumber("NPCID：",0, 0, 9999999);
		} else if (status == 1) {
			cm.dispose();
			cm.openNpc(selection);
		}
    }//mode
}//f